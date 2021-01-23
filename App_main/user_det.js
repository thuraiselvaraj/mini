const express=require("express")
const conn=require("../Models/connection.js").client 
const router=express.Router()
const post_query="insert into user_details\
     values($1,$2,$3)"

router.get("/uget",(req,res)=>{
    conn.query("select * from user_details u where u.id=$1",[req.id])
    .then(data=>{

    })
})

router.put("/upost",(req,res)=>{
   
})

router.get("/upatch",(req,res)=>{
    
})