const schema=require("./data_schema")
module.exports=function(table,data){
   let table=schema[table]
   for(i in table){
      let [dtype,stype]=table[i].split("::")
      if(stype){
         data[i]=data[i].map(String)
      }
      }

   }
}