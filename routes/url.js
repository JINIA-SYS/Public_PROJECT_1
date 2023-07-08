const express=require("express");
const router=express.Router()
const {POST_Short_URL,}=require("../controllers/url_functions.js")



router.route("/Home").post(POST_Short_URL)
module.exports=router