const express=require("express");
const bodyParser=require("body-parser");
const app=express();
// const queue = new events.EventEmitter();
const server = require('http').createServer(app)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var db=[];


app.get("/chat/",(req,res)=>{
    console.log("connected")
    res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
    });   
    db.push(res);
    req.on("close",()=>{
        console.log("closes")
        
    })
})
app.get("/sub/",(req,res)=>{
    console.log(db.length);
    db.map(x=>{
        x.write("data:foobar\n\n")
        console.log(db.length);
        console.log("writing")
    })
    res.end()
})

app.get("/show/",(req,res)=>{
    console.log(db);
    res.end()

})

app.listen(3000,()=>{
    console.log(`Server started successfully on PORT ${3000}`)
     })


// siege -b -t 10s -c45 http://localhost:3000/chat
