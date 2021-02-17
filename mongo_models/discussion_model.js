const mongoose=require("mongoose")
const {Schema}=mongoose

var DiscussionSchema=new Schema({
      _id : String,
      u_id :{type: Number,required :true},
      p_id : {type: Number},
      date : { type: Date, default: Date.now },
      edited_on : { type: Date, default: Date.now },
      quote : {type: String,required :true},
      up_vote : Number,
      down_vote : Number,
      replies : [{type:String ,ref:"Discussion"}],
})

DiscussionSchema.virtual("reply",{
      ref : "Discussion",
      localField : 'replies',
      foreignField : '_id',
})
DiscussionSchema.set('toObject', { virtuals: true });
DiscussionSchema.set('toJSON', { virtuals: true })


module.exports=mongoose.model("Discussion",DiscussionSchema)


