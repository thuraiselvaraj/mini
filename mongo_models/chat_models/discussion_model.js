const mongoose=require("mongoose")
const {Schema}=mongoose


var DiscussionSchema=new Schema({
      _id : String,
      u_id :{type: Number,required :true},
      post_id : {type: Number},
      date : { type: Date, default: Date.now },
      edited_on : { type: Date, default: Date.now },
      quote : {type: String,required :true},
      up_vote : Number,
      down_vote : Number,
      p_id : String,
      c_id : [String],
      replies : [{type:String ,ref:"Discussion"}],
})

DiscussionSchema.set('toObject', { virtuals: true });
DiscussionSchema.set('toJSON', { virtuals: true })
// DiscussionSchema.pro
// DiscussionSchema.pre('findOne',function(next){
// //     console.log(this)
//       this.populate({
//       path:'replies',
//       populate :{
//           path :'replies',
//           populate :{
//              path :'replies'
//                 }
//              }
//           })
//   return next()
// })

// DiscussionSchema.post('delete',function(next){
//         this.deleteMany({id : [next.replies]}).save(x=>{
//             console.log("post delete many")
//         })
//         return next
//       })

// Final working
DiscussionSchema.pre("deleteOne",function(next){
      console.log("getting in ",{_id:this.getQuery()._id})
      this.model.findOne({_id:this.getQuery()._id}).then(x=>{
      next()
      if(x){
             console.log("Del",x._id,x.replies)
             x.replies.map(y=>{
             this.model.deleteOne({_id:y}).then(x=>{
                   console.log("deleted Items",x)
             }).catch(x=>{
                   console.error(x)
             })
             })

            }
            
      })
 
 })





module.exports=mongoose.model("Discussion",DiscussionSchema)


