const redis=require("redis")
const redis_conn=redis.createClient({
    host:"localhost",
    port:6379
})

module.exports=redis_conn