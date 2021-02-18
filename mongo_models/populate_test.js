const mongoose=require("mongoose");
const Discussion=require("./discussion_model");
// Discussion.prototype.class_=()=>Discussion;

mongoose.connect("mongodb://localhost:27017/mini",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   }).then((db) => console.log("db is connected"))
     .catch((err) => console.log(err));


// Discussion.findOne({_id:'1'})
// .then(x=>{
//     console.log((x))
// })

Discussion.deleteOne({_id:2}).then(console.log)