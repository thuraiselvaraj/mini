const router=require("express").Router();
const conn=require("../pg_models/connection.js").client 
const queue=require("../chat/pubsub_queue");

async function is_friends(s_id,r_id){
    let data=await conn.query(`select 1  from friends where a_id=$1 and b_id=$2 or a_id=$2 and b_id=$1`,[s_id,r_id].sort((a,b)=>a-b))
    return data
}

// console.log(is_friends(5,6).then(console.log))

router.get("/friends/:id",(req,res)=>{
    // change :id and set it from  auth
    conn.query("select find_frnd.uid,concat(firstname,' ',lastname) as name from (select case when a_id=$1 then b_id \
        when b_id=$1 then a_id \
        end as uid from friends) as find_frnd\
        inner join login on find_frnd.uid=login.id;\
       ",[req.params.id])
        .then(
            data=>{
                let payload={};
                payload._friends=data.rows;
                console.log(payload)
                payload.active=Object.keys(queue.queue_get_online(req.params.id));
                res.json(payload)
            }          
        ).catch(error=>{
            console.log(error)
            res.send("Db Error")
        }
        )
})

router.get("/add_friend",(req,res)=>{
    if(req.rid){
    conn.query("insert into friends values($1,$2) on conflict do nothing;",[req.id,req.body.fid].sort((a,b)=>a-b))
    .then(()=>{
        res.json({status :200})
    })
    .catch(()=>{
        res.json({status :400})
    })
    }
    else{
        res.json({status :400})
    }
})

