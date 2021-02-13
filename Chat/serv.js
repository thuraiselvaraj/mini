const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const events=require("events");
const queue = new events.EventEmitter();

// const {client}=require("../Postgres_Models/connection")
const server = require('http').createServer(app)
// const redis = require("redis"),
//     client = redis.createClient({
//             host:"localhost",
//             port:6379
//         });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/", express.static("static"));

// app.get("/chat/", (req, res) => {
//         res.writeHead(200, {
//           "Content-Type": "text/event-stream",
//           "Cache-Control": "no-cache",
//           "Connection": "keep-alive"
//         });      
// })  

app.post("/write/:_id",(req,res)=>{
    // console.log(JSON.stringify(req.body))
    queue.emit(req.params._id,`data:${JSON.stringify(req.body)}\n\n`)
    res.end()
})

app.get("/chat/:_id/:_rid",(req,res)=>{
    function anon(data){
        console.log(data)
        res.write(data)
    }
    res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
    });   
    queue.on(req.params._id,anon)

    req.on("close",()=>{
        console.log("closes")
        queue.removeListener(req.params._rid,anon)
    })
})


app.listen(3000,()=>{
    console.log(`Server started successfully on PORT ${3000}`)
     })
