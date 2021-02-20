const multer=require('multer');
var upload = multer({ dest: '../static/' })
const express=require("express")
const app=express()
app.use(express.static("./upload_static"))

app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
    const files = req.files
    if (!files) {
      const error = new Error('Please choose files')
      error.httpStatusCode = 400
      return next(error)
    }
  
      res.send(files)
   
  })

app.listen(3000,console.log)