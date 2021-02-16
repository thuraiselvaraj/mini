const conn=require("../pg_models/connection.js").client
const {CreateCookie}=require("./create_cookie")
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
    CreateCookie(data.rows[0].id,email,res)
    })
    .catch(err=>{
    console.error(err.stack)
    res.render("no_signin.ejs")
    })
    }
    else{
        res.render("signin.ejs")
    }
}
  

