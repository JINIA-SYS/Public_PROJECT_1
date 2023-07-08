const mongoose=require("mongoose")

async function MONGODB_connect(url){
    return mongoose
    .set({strictQuery:true})
    .connect(url)
    .then(()=>{console.log(`MONGODB is connected:${url}`)})
    .catch(error=>{console.log("MONGODB Connection failure,please check the server")})
}

module.exports={
    MONGODB_connect
}