const conn=require("../pg_models/connection.js").client
const {CreateCookie}=require("./create_cookie")
module.exports=function(req,res,next){
    if(req.method=="POST"){
    let email=req.body.email
    let password=req.body.password
    console.log("Login",[email,password])
    conn.query(`select * from  login where login.email=$1 and login.password=$2;`,[email,password])
   .then(data=>{
    if(data.rowCount){
     console.log(data)
     CreateCookie(data.rows[0].id,email,res)
    }   
     else{
        conn.query(`select login.email from  login where login.email=$1;`,[email])
        .then(data=>{
            if(data.rowCount){
            console.log("password wrong")
            res.render("no_login.ejs")
            }
            else
            res.redirect("/signin")

        })
    }
   })
    .catch(err=>{
        console.log("login_user err",err)
      res.redirect("/signin")
    })
    }
    else{
    console.log("No post")
    if(req.cookies.cookie){
        res.redirect("/home")
    }
    res.render("login.ejs")
    }
}


