const router=require("express").Router();
const crypto = require("crypto");

router.get("/live/push/:client",(req,res)=>{
   let {desc,tag} = req.body;
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

