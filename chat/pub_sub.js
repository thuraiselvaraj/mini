module.exports={
        pub_sub : {},
        offline_msg: {},
        user_status: {},
        subscribe(event,id,cb){
             this.pub_sub[event][id]=cb;
        },
        unsubscribe(event,id){
          delete this.pub_sub[event][id];
        },
        publish(event,msg,id){
          if(id){
            if(this.pub_sub[event]){
                this.pub_sub[event][id](msg) 
              }
            }
          else{
            for(let ids in this.pub_sub[event]){
               this.pub_sub[event][ids](msg) ;
            }
          }
        },

        pub_msg(to,msg,from){
          if(this.pub_sub[to+":message"]){
            this.pub_sub[to+":message"][to](from,msg) 
          }
          else{
               this.offline_msg[to+":message"]=this.offline_msg[to+":message"] || []
               this.offline_msg[to+":message"].push(JSON.stringify({from,msg})) 
                    // handle offline here with db or queue
                    // temp soln
                           
               }
          },
        dispatch(id){
          for(let i of offline_msg[id+":message"]){
             let {from,msg}=JSON.parse(i);
             this.pub_sub[id+":message"][id](from,msg);

          }
        },
        
        put_online(id){
           this.user_status[id]=1
        },

        put_offline(id){
           this.user_status[id]=new Date();
        },
        
        dispatch_time(res,friends){
          let u_time = {};
          for(let i of friends){
            u_time[i]=this.user_status[i];
          }
          res.write(JSON.stringify(u_time));

        }
}


