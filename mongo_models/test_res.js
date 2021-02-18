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
// DiscussionSchema.pre("deleteOne",function(next){
//       console.log("getting in ",{_id:this.getQuery()._id})
//       this.model.findOne({_id:this.getQuery()._id}).then(x=>{
//       if(x){
//              console.log("Del",x._id,x.replies)
            
//              x.replies.map(y=>{
//              console.log("The y value is ",y)
//              this.model.deleteOne({_id:y}).then(x=>{
//                    console.log("Deleted then")
//                    console.log(x)   
          
//              }).catch(x=>{
//                    console.log("Error")
//                    console.error(x)
//              })
//              return next() 
//              })
//              returnnext()
//             }
//             // return next()
//       })
      
//       // next()   
//     return next()

// })
// DiscussionSchema.post("deleteOne",function(next){
//       console.log("Post Middles")
//       console.log(next)
// })


DiscussionSchema.pre("deleteOne",function(next){
      console.log("getting in ",{_id:this.getQuery()._id})
      // next()
      this.model.findOne({_id:this.getQuery()._id}).then(x=>{
           
            console.log("Findone")
            if(x){
                          console.log("Del",x._id,x.replies)
                          this.model.deleteMany({_id:x.replies}).then(x=>{
                          console.log("delete then")
                          console.log("x",x)
                          next()
                          
                     }).catch(e=>{
                           console.log("fonethen",e)
                     })
                        //  next()
                     
                  }
            else{
                  next()
            }
                  // return next()


      })
      

      
      
})
DiscussionSchema.pre("deleteMany",function(next){
      console.log("getting in many ",this.getQuery()._id)
      this.getQuery()._id.map( x=>{
            console.log("x",x)
            this.model.deleteOne({_id:x}).then(s=>{
                   console.log("S" ,s)  
                   next()
            }).catch(e=>{
                  console.log("Error is",e)
            })
            // next()
           
            // console.log("S" ,s)     
      })
      // next()
      next("del tehn x")
      // return next("cus")
     

      // Promise.all(this.getQuery()._id.map(x=>{
      //      return this.model.deleteOne({_id:x})
      //        })).then(x=>{
      //             console.log("deletemany then")
      //             console.log(x)
      //             return next()
      //        })
      
})



module.exports=mongoose.model("Discussion",DiscussionSchema)






// getting in  { _id: 1 }
// db is connected
// Findone
// Del 1 ["2"]
// getting in many  [ '2' ]
// x 2
// getting in  { _id: '2' }
// fonethen del tehn x
// Findone
// Del 2 ["3","4"]
// getting in many  [ '3', '4' ]
// x 3
// x 4
// getting in  { _id: '3' }
// getting in  { _id: '4' }
// fonethen del tehn x
// Findone
// Del 3 ["5"]
// getting in many  [ '5' ]
// x 5
// getting in  { _id: '5' }
// fonethen del tehn x
// Findone
// Del 4 ["6"]
// getting in many  [ '6' ]
// x 6
// getting in  { _id: '6' }
// fonethen del tehn x
// Findone
// Del 5 []
// getting in many  []
// fonethen del tehn x
// Findone
// Del 6 []
// getting in many  []
// fonethen del tehn x



DiscussionSchema.pre("deleteOne",function(next){
    console.log("getting in ",{_id:this.getQuery()._id})
    this.model.findOne({_id:this.getQuery()._id}).then(x=>{
    next()
    if(x){
           console.log("Del",x._id,x.replies)
           x.replies.map(y=>{
           console.log("The y value is ",y)
           this.model.deleteOne({_id:y}).then(x=>{
                 console.log("Deleted then")
                 console.log(x)   
        
           }).catch(x=>{
                 console.log("Error")
                 console.error(x)
           })
           })

          }
          
    })

})



// getting in  { _id: 2 }
// db is connected
// Del 2 ["3","4"]
// The y value is  3
// The y value is  4
// getting in  { _id: '3' }
// getting in  { _id: '4' }
// Main then { ok: 1, n: 1, deletedCount: 1 }
// Del 3 ["5"]
// The y value is  5
// getting in  { _id: '5' }
// Del 4 ["6"]
// The y value is  6
// getting in  { _id: '6' }
// Del 5 []
// Deleted then
// { ok: 1, n: 1, deletedCount: 1 }
// Deleted then
// { ok: 1, n: 1, deletedCount: 1 }
// Del 6 []
// Deleted then
// { ok: 1, n: 1, deletedCount: 1 }
// Deleted then
// { ok: 1, n: 1, deletedCount: 1 }





// Final working
function thenCb(x,flag){
    console.log("Deleted then",flag)
    console.log(x)   
    }
    DiscussionSchema.pre("deleteOne",function(next){
          console.log("getting in ",{_id:this.getQuery()._id})
          this.model.findOne({_id:this.getQuery()._id}).then(x=>{
          // console.log(thenCb==next)
    
          next("flag")
          if(x){
                 console.log("Del",x._id,x.replies)
                 x.replies.map(y=>{
                 console.log("The y value is ",y)
                 this.model.deleteOne({_id:y}).then(thenCb).catch(x=>{
                       console.log("Error")
                       console.error(x)
                 })
                 })
    
                }
                
          })
     
     })
     
// getting in  { _id: 1 }
// db is connected
// Del 1 ["2"]
// The y value is  2
// getting in  { _id: '2' }
// Main err flag
// Del 2 ["3","4"]
// The y value is  3
// The y value is  4
// getting in  { _id: '3' }
// getting in  { _id: '4' }
// Error
// flag
// Del 4 ["6"]
// The y value is  6
// getting in  { _id: '6' }
// Error
// flag
// Del 6 []
// Error
// flag
// Del 3 ["5"]
// The y value is  5
// getting in  { _id: '5' }
// Error
// flag
// Del 5 []
// Error
// flag

