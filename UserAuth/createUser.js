const conn=require("../Models/connection.js").client
const {CreateCookie}=require("./createCookie")
module.exports=function(req,res,next){
  if(req.method=="POST"){
    let firstname=req.body.firstname
    let lastname=req.body.lastname 
    let email=req.body.email
    let password=req.body.password
    console.log([email,firstname,lastname,password])
    conn.query(`insert into login  values($1,$2,$3,$4) RETURNING *;`,[email,firstname,lastname,password])
   .then(data=>{
    console.log(data)
    CreateCookie(email,res)
    })
    .catch(err=>{
    console.error(err.stack)
    res.render("sign_in.ejs")
    })
    }
    else{
        res.render("sign_in.ejs")
    }
}
  

