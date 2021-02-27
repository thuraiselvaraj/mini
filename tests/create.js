const mongoose=require("mongoose");
const Discussion=require("./discussion_model");
// Discussion.prototype.class_=()=>Discussion;

mongoose.connect("mongodb://localhost:27017/mini",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   }).then((db) => console.log("db is connected"))
     .catch((err) => console.log(err));

//      var Discussion=new Schema({
//         u_id :{type: Number,required :true},
//         p_id : {type: Number},
//         date : { type: Date, default: Date.now },
//         edited_on : { type: Date, default: Date.now },
//         quote : {type: String,required :true},
//         up_vote : Number,
//         down_vote : Number,
//         replies : [{type:Schema.Types.ObjectId ,ref:"Discussion"}],
//   })
// Discussion.deleteMany({}).exec()

d1= new Discussion({
    _id :'1',
    u_id :20,
    p_id :44,
    quote : "THis is top",
    replies : ['2']
}).save()

d2= new Discussion({
    _id :'2',
    u_id :21,
    // p_id :44,
    quote : "THis is second",
    replies : ['3','4']
}).save()

d3=new Discussion({
    _id :'3',
    u_id :22,
    // p_id :44,
    quote : "THis is third",
    replies : ['5']
}).save()

d4= new Discussion({
    _id :'4',
    u_id :22,
    // p_id :44,
    quote : "THis is fourth",
    replies : ['6']
}).save()

d4= new Discussion({
    _id :'5',
    u_id :22,
    // p_id :44,
    quote : "THis is fifth",
    replies : []
}).save()

d5=new Discussion({
    _id :'6',
    u_id :22,
    // p_id :44,
    quote : "THis is sixth",
    replies : []
}).save()
