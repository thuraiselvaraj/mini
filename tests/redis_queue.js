var redis = require("redis"),
    client = redis.createClient({
            host:"localhost",
            port:6379
        });

client.subscribe("media")


// client.on("message",()=>{
//         console.log("called")
//         setTimeout(()=>{
//         for(i=0;i<1000000000;i++){t=3}
//         console.log("End")
//         },0)
// })
