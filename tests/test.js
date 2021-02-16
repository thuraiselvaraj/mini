const express=require("express")
// const conn=require("../Models/connection.js").client 
const router=express.Router()
const app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("/user/:user",(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})

app.get("/user/:user/posts",(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})


app.get("/user/:user/profile",(req,res)=>{
    console.log(req.params)
    res.send(req.params)
})


app.listen({port:3000,host:'localhost'},()=>{
    console.log("Server started successfully")
})