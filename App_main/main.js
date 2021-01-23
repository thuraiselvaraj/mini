const express=require("express")
const bodyParser=require("body-parser")
const userCreateMW=require("../UserAuth/createUser")
const userLoginMW=require("../UserAuth/Loginuser")
const authMW=require("../UserAuth/authenticate")
const cookie_parser=require("cookie-parser")
const logoutMW=require("../UserAuth/logOut")
const path=require("path")
const app=express()
app.set('view engine', 'ejs');
const port=3000;
const host="localhost"
app.use(cookie_parser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', [path.join(__dirname,"..","Templates")]);

app.use("/signin",userCreateMW)
app.use("/login",userLoginMW)
app.use(authMW)
app.use("/logout",logoutMW)
app.get("/",(req,res)=>{
  res.write("Welcome to My app")
  res.end()
})



app.get("/home",(req,res)=>{
  res.render("home.ejs",{username:req.username})
})

app.get("/test",(req,res)=>{
  console.log(req.originalUrl)
  res.end()
})

app.listen({host,port},()=>{
    console.log(`Server started successfully on PORT ${port}`)
     })
