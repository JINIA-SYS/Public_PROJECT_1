const {Schema,model}=require("mongoose");
const url_shortner_schema=new Schema({
    shortID:{type:String,unique:true},
    URL_Link:{type:String,required:true},
    CLICKTIME:[{timestamp:{type:Number}}],
    createdBy:{ type:Schema.Types.ObjectId,ref:"USER",}
    
},{timestamps:true});
const url_shortner_model=model('Link',url_shortner_schema)
module.exports=url_shortner_model
