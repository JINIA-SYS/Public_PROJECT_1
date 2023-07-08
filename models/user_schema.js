const {Schema,model}=require("mongoose");

const user_schema=new Schema({firstName:{type:String,required:true},
    lastname:{type:String,required:false},
    EmailID:{type:String,required:true,unique:true},
    PASSWORD:{type:String,required:true},
    role:{type:String,required:true,default:"NORMAL",}
},{timestamps:true});

const user_model=model("USER",user_schema)
module.exports=user_model
