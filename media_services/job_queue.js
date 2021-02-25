const redis = require("redis")
const conn=redis.createClient()
conn.subscribe("media")
conn.on("message",(chn,msg)=>{
    if(chn==="media"){
        //create a worker here and upload the pic
    }
})