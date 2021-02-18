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
                  this.model.deleteOne({_id:x})
                  })
      }

})
}