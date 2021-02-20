const router=require("express").Router();

router.post("/addc/",(req,res)=>{
    //add the comment here
})

router.patch("/editc/:cid",(req,res)=>{
    // patch comment here
})

router.delete("/delc/:cid",(req,res)=>{
    // delete comment here
})

router.get("c/:cid",(req,res)=>{
    // get comment here
})