const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const {client}=require("../Postgres_Models/connection")
const server = require('http').createServer(app)
const redis = require("redis"),
    client = redis.createClient({
            host:"localhost",
            port:6379
        });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/", express.static("static"));

app.get("/chat/", (req, res) => {
  console.log("inside chat")
        res.writeHead(200, {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive"
        });      
})  

app.post("/write",(req,res)=>{
  client.map(e=>{
    e.write(`data:${JSON.stringify(req.body)}\n\n`)
    console.log(client.length)
  })
  res.end()
})


app.listen(3000,()=>{
    console.log(`Server started successfully on PORT ${3000}`)
     })
