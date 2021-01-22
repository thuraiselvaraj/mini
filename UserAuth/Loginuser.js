const conn=require("../Models/connection.js").client
const {CreateCookie}=require("./createCookie")
module.exports=function(req,res,next){
    if(req.method=="POST"){
    let email=req.body.email
    let password=req.body.password
    console.log("Login",[email,password])
    conn.query(`select * from  login where login.email=$1 and login.password=$2;`,[email,password])
   .then(data=>{
    if(data.rowCount){
     CreateCookie(email,res)
    }   
     else{
        conn.query(`select login.email from  login where login.email=$1;`,[email])
        .then(data=>{
            if(data.rowCount){
            console.log("password wrong")
            res.render("Nologin.ejs")
            }
            else
            res.redirect("/signin")

        })
    }
   })
    .catch(err=>{
      res.redirect("/signin")
    })
    }
    else
    res.render("login.ejs")
}


