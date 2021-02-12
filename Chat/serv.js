const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const server = require('http').createServer(app)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static("static"));

client=[];
app.get("/chat/", (req, res) => {
  client.push(res)
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
