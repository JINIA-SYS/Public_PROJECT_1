const express=require("express")
const router=express.Router()
const {STATIC_HOME_PAGE,STATIC_LOGIN_PAGE,STATIC_SIGNUP_PAGE,SHORT_URL_SHORTID,SHORT_URL_CLICK,ADMIN_PAGE}=require("../controllers/static_function.js");
//const {authentication}=require("../middlewares/authentication.js")
const {authorized_role}=require("../middlewares/authorization.js")

router.route("/Home").get(authorized_role(["NORMAL","ADMIN"]),STATIC_HOME_PAGE)
router.route("/admin").get(authorized_role(["ADMIN"]),ADMIN_PAGE)
router.route("/Login").get(STATIC_LOGIN_PAGE)
router.route("/Signup").get(STATIC_SIGNUP_PAGE)
router.route("/:SHORTID").get(SHORT_URL_SHORTID)

router.route("/analytics/:SHORTID").get(SHORT_URL_CLICK)
module.exports=router   