const router=require("express").Router();
const crypto = require("crypto");

router.get("/live/push/:client",(req,res)=>{
   let client=req.params.client || 0
   let {desc,tag} = req.body;
   switch(client){
       case "web" :
         //push to redis
         //push to db with desc,tag
       case "other" : 
         //push to redis
         //push to db
       default :
           res.send({status:400})
           return;
   }
   let uuid=crypto.randomBytes(16).toString("hex")
   //push uuid with req id to db and cache
   res.json({desc,tag,live_url:`/live/${uuid}`})
})

router.get("/live/:uuid",(req,res)=>{
     //check for uuid in cache layer if already registerd
     
     //if registered send custom http message

     //else 
         // send hooked url and get and feed live 
})

