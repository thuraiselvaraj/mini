const mongoose=require("mongoose")
const {Schema}=mongoose

var AllUserMediaSchema=new Schema({
      u_id : String,
      m_ids : {type : Schema.Types.ObjectId,ref : "ChatMedia"}
})

var ChatMediaSchema=new Schema({
      m_id : {type: String,required :true},
      m_mime : {type: String},
      date : {type: Date, default: Date.now},
      quote : {type: String},
});



