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
// DiscussionSchema.pre("deleteOne",function(next){

//       // console.log(next)
//       // console.log("Id is",this.getQuery()._id)
//       this.model.findOne({_id:this.getQuery()._id}).then(x=>{
//             console.log("DElel",x)
//       })
//       // return next()
      
// })
// DiscussionSchema.pre("deleteMany",function(next){
//       console.log(this.getQuery().id)
//       return next()
// })



//working
// DiscussionSchema.pre("deleteOne",async function(next){
//       // console.log("getting in ",{_id:this.getQuery()._id})
//       let x=await this.model.findOne({_id:this.getQuery()._id})
//       // console.log(x)
//       if(x){
//       //    console.log("Del",x._id,x.replies)
//          x.replies.map(async x=>{
//                   console.log(x)
//                   this.model.deleteOne({_id:x})
//                   })
//       }

// })


DiscussionSchema.pre("deleteOne",function(next){
      console.log("getting in ",{_id:this.getQuery()._id})
      this.model.findOne({_id:this.getQuery()._id}).then(x=>{
            if(x){
                          console.log("Del",x._id,x.replies)
                          this.model.deleteMany({_id:x.replies}).then(x=>{
                          console.log("delete then")
                          console.log(x)
                          return next()
                     })
                  }

      })
      
})
DiscussionSchema.pre("deleteMany",function(next){
      console.log("getting in many ",this.getQuery()._id)
      Promise.all(this.getQuery()._id.map(x=>{
           return this.model.deleteOne({_id:x})
             })).then(x=>{
                  console.log("deletemany then")
                  console.log(x)
                  return next()
             })
      
})



module.exports=mongoose.model("Discussion",DiscussionSchema)


