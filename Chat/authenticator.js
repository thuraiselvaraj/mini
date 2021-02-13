const conn=require("../Postgres_Models/connection.js").client
module.exports=function(req,res,next){
    console.log(req.cookies.cookie)
    console.log(req.originalUrl)
    conn.query(`select * from  sessions where sessions.cookie=$1 ;`,[req.cookies.cookie])
   .then(data=>{
    if(data.rowCount){
       conn.query(`select * from  login where login.email=$1 ;`,[data.rows[0].email])
       .then(data=>{
        if(data.rowCount){
       console.log(data)
       req.uid=data.rows[0].id
       req.username=data.rows[0].firstname+data.rows[0].lastname
       req.email=data.rows[0].email
       req.auth=true
       
       next() 
        }
       else{
        res.redirect("/login")
       }
       })  
       .catch(err=>console.error(err))
      }
    else{
            console.log("Not auth")
            res.redirect("/login")
        }
   })
    .catch(err=>{
        console.log(err)
        res.render("login.ejs")
    })
    }

    
   
