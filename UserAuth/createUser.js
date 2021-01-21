const conn=require("../Models/connection.js").client
exports.create_user=function(req,res,next){
    let firstname=req.body.firstname
    let lastname=req.body.lastname 
    let email=req.body.email
    let password=req.body.password
}
