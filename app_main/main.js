const express=require("express")
const bodyParser=require("body-parser")
const userCreateMW=require("../user_auth/create_user")
const userLoginMW=require("../user_auth/login_user")
const authMW=require("../user_auth/authenticate")
const rest_auth=require("../user_auth/rest_auth")
const cookie_parser=require("cookie-parser")
const logoutMW=require("../user_auth/logout")
const path=require("path")
const app=express()
const server = require('http').createServer(app);
app.set('view engine', 'ejs');
const port=3000;
const host="localhost"
app.use(cookie_parser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', [path.join(__dirname,"..","templates")]);

app.use("/signin",userCreateMW)
app.use("/login",userLoginMW)
app.use(authMW)
app.use("/api",rest_auth)
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


app.get("/user/:user",(req,res)=>{
  req.params
})

app.listen({host,port},()=>{
    console.log(`Server started successfully on PORT ${port}`)
     })
