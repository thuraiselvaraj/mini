const express=require("express")
const router=express.Router()
var AllMedia;
router.get(":device/:m_id",(req,res)=>{
    let {device,m_id}=req.params;
    if(!device){
        // send for device from req origin
    }
    if(!m_id){
        res.end(400);
    }
    else{
        //check for db and send the res
    }
});


// No media caching
router.get("media/gal/:page",(req,res)=>{
    let page=req.params.page
    if(!page){
        //set page to 0 and send 5 posts
        //store the count in the redis
    }
    else{
         //check if the redis has the key count if send else set here 
       
       
              //find image url from the db and send the resp with pagination

        //
        
    }
    
})


