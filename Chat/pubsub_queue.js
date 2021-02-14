const redis = require("redis"),
var client = redis.createClient({
            host:"localhost",
            port:6379
        });
module.exports={
        queue : {},
        pub_sub : {},
        data_push(r_id,data){
             if(r_id in queue){
               this.queue[r_id].write(data)
             }
             client.rpush(r_id,data)
        },

        rs_push(rs_id,res){
             queue[rs_id]=res
        },
        
        subscribe(event,s_id,cb){
          (this.pub_sub[event] ? this.pub_sub[event] : {})[s_id]=cb
        },

        publish(event){
            this.pub_sub[event].map(cb=>cb())
        },

        unsubscribe(event,s_id){
           delete this.pub_sub[event][s_id]
        },

        rs_remove(rs_id){
             delete this.queue[rs_id]

        }
}