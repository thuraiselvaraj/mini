const conn=require("../Models/connection.js").client
const crypto = require("crypto");
function CreateCookie(email,res){
     let cookie=crypto.randomBytes(16).toString("hex")
     conn.query(`insert into sessions values($2,$1) returning *`,[cookie,email]) 
     .then(data=>{
        if(data.rowCount){
        console.log("successfully authenticated")
        res.cookie("cookie",cookie)
        res.redirect("/home")
        }
        else
        res.redirect("/login")
        })
      .catch(err=>{
        res.redirect("/login")
          })
        }
exports.CreateCookie=CreateCookie