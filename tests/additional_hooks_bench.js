{  //Promise version
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
}

{
// Recursion Version
DiscussionSchema.pre("deleteOne",async function(next){
      // console.log("getting in ",{_id:this.getQuery()._id})
      let x=await this.model.findOne({_id:this.getQuery()._id})
      // console.log(x)
      if(x){
      //    console.log("Del",x._id,x.replies)
         x.replies.map(async x=>{
                  console.log(x)
                  await this.model.deleteOne({_id:x})
                  })
      }

})
}




//working
DiscussionSchema.pre("deleteOne",function(next){
     console.log("getting in ",{_id:this.getQuery()._id})
     this.model.findOne({_id:this.getQuery()._id}).then(x=>{
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
            return next() 
            })
            next()
           }
           
     })
     // else return next()   
//     return next("cooo")

})




// Final working perfect
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