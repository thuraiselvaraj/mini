const express=require("express")
const app=express()
app.set('view engine', 'ejs');
const bodyParser=require("body-parser")
const port=3000;
const host="localhost"
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', ["../Templates"]);

app.get("/",(req,res)=>{
  res.write("Welcome to My app")
  res.end()
})

app.get("/login",(req,res)=>{
   res.render("login.ejs")
  })

app.post("/login",(req,res)=>{
  console.log(req.body)
  res.end()
  })

app.get("/signin",(req,res)=>{
    res.render("sign_in.ejs")
   })

app.post("/signin",(req,res)=>{
    
   })

app.listen({host,port},()=>{
    console.log(`Server started successfully on PORT ${port}`)
     })
