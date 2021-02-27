const express=require("express")
const client=require("../pg_models/connection").client
const router=express.Router()

router.get("/chat/db/:rid",(req,res)=>{
 let sid=req.uid;
 let rid=req.params.rid;
 let ids=[sid,rid]
 db.samp.find(
    {$and:[
        {sid:{$in:ids}},
        {rid:{$in:ids}}
    ]}
).limit(5).skip()
})

