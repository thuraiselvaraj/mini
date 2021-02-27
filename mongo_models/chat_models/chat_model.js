const mongoose=require("mongoose")
const {Schema}=mongoose
var ChatSchema=new Schema({
      sender_id : {type: Number,required:true},
      receiver_id : {type: Number,required:true},
      date : {type: Date, default: Date.now},
      _message: {type: String},
      _chat_med :  {type : Schema.Types.ObjectId,ref : "ChatMedia"}

});