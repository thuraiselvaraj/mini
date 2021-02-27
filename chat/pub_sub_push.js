const express=require("express");
const bodyParser=require("body-parser");
const app=express();

const server = require('http').createServer(app)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/", express.static("static"));
app.get("/chat/:sid/:rid",(req,res)=>{
//check  sid is self
  queue.pub_msg(rid,req.body.msg,sid)
})

app.get("/chat/:id",async (req,res)=>{

   
    // let id=req.uid; //ex 101
    let id=req.params.id;
    // 101:online

    // let friends=await find_friends(id);
    queue.put_online(id);
    let friends=[101]
    queue.subscribe(id+':notify',id,(msg)=>{
      res.write(`event: notify\n,data:${msg}\n\n`);
    })

    queue.subscribe(id+":message",id,(rid,msg)=>{
      res.write(`event: message\n,data:${JSON.stringify({rid,msg})}\n\n`);
    })
    
    for(let rid of friends){
      queue.publish(id+":online",null,rid)
      queue.subscribe(rid+":online",id,()=>{
        //dispatch any remaining messages here.
        res.write(`event: online\n,data: ${rid}\n\n`);
      })
      queue.subscribe(rid+":offline",id,()=>{ 
        res.write(`event: offline\n,data:${rid}\n\n`);
      })
      
    }

    queue.dispatch(id);
    queue.dispatch_time(res,friends)

    req.on("close",()=>{
      queue.publish(id+":offline");
      queue.unsubscribe(id+":message",id);
      queue.unsubscribe(id+":notify",id);
      queue.put_offline(id);
      for(let rid of friends){
        queue.unsubscribe(rid+":online",id);
        queue.unsubscribe(rid+":offline",id);
        
      }
    })
  })