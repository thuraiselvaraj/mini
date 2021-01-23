const express=require("express")
const conn=require("../Models/connection.js").client 
const router=express.Router()
const app=express()
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const post_query="insert into user_details\
     values($1,$2,$3)"

// app.get("/get",(req,res,next)=>{
//     // conn.query("select * from user_details u where u.id=$1",[req.id])
//     // .then(data=>{

//     // })
//     console.log(req.body)
//     next()

// })

// router.get("/",(req,res,next)=>{
//    console.log("Calling middleware /")
//    next()
// })

// app.get("/patch",(req,res)=>{
//     console.log("Done /patch")
//     res.send("Blaba")
//     // res.redirect("/get")
// })

// app.use(router);

app.listen({port:3000,host:'localhost'},()=>{
    console.log("Server started successfully")
})