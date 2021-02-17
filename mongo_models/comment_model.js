const mongoose=require("mongoose")
const {Schema}=mongoose

const Comment=new Schema({
    u_id :{type: Number,required :true},
    p_id : {type: Number,required :true},
    s_id : {type: Number,required :true},
    date : {type: Date, default: Date.now },
    quote : {type: String,required :true},
})