const express=require("express")
const router=express.Router()


const {POST_SIGNUP,POST_LOGIN}=require("../controllers/user_function")

router.route("/Signup").post(POST_SIGNUP)
router.post("/Login",POST_LOGIN)

module.exports=router