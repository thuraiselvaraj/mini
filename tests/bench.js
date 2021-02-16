const express=require("express");
const bodyParser=require("body-parser");
const app=express();
// const queue = new events.EventEmitter();
const server = require('http').createServer(app)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/", express.static("static"));

app.post("/write/:_id",(req,res)=>{
    // // console.log(JSON.stringify(req.body))
    // queue.emit(req.params._id,`data:${JSON.stringify(req.body)}\n\n`)
    res.end()
})

app.get("/chat/",(req,res)=>{
    console.log("connected")
    res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
    });   

    req.on("close",()=>{
        console.log("closes")
        
    })

    
})

app.listen(3000,()=>{
    console.log(`Server started successfully on PORT ${3000}`)
     })