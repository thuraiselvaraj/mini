const conn=require("../Models/connection.js").client
module.exports=function(req,res,next){
    console.log("Logout called")
     conn.query(`delete from sessions where sessions.cookie=$1`,[req.cookie]) 
     .then(data=>{
        res.clearCookie('cookie')
        res.redirect("/login")
        })
      .catch(err=>{
        res.redirect("/login")
          })
        }