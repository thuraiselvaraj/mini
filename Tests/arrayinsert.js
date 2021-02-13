const conn=require("../Postgres_Models/connection.js").client 
// const post_query="insert into user_details\
//      values($1,$2,$3,$4,$5,$6,$7,$8) returning *"


// conn.query(post_query,[
//     1,
//     22,
//     "Dgl",
//     ["BE","ME"],
//     "student",
//     ["RUbY","JS"],
//     ["Docker","AWS"],
//     ["serverless","Devops",{name:"chella"}]
// ]).then(
//     data=>console.log(data.rows)
// ).catch(
//     err=>console.log(err)
// )

conn.query("select * from (select case when a_id=1 then b_id \
    when b_id=1 then a_id \
    end as temp from friends) as c\
    where temp is not null;\
")
.then(
        data=>console.log(data.rows)
    ).catch(
        err=>console.log(err)
    )