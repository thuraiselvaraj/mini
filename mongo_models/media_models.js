const mongoose=require("mongoose")
const {Schema}=mongoose


var MediaSchema=new Schema({
      _id : String,
      m_id :{type: String,required :true},
      m_mime: {type: String},
      date : { type: Date, default: Date.now },
      quote : {type: String,required :true},
})
