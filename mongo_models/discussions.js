const router=require("express").Router();

router.post("/addp/",(req,res)=>{
    //add the discussion here
})

router.patch("/editp/:pid",(req,res)=>{
    // patch discussion here
})

router.delete("/delp/:pid",(req,res)=>{
    // delete discussion here
})

router.get("p/:pid/",(req,res)=>{
    // get discussion here
})