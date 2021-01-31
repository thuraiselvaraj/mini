const conn=require("../Models/connection.js").client
module.exports=function(req,res,next){
    if(req.body.sess_id){
    req.cooki.cookie=req.sess_id
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
    else{
        res.render("login.ejs")
    }
}

    
   
