const shortid = require("shortid")
const fs = require("fs")
const URL_shortner = require("../models/mongoose_schema")
const USERDATA = require("../models/user_schema")

async function STATIC_HOME_PAGE(req, res) {
    //if (!req.user) return res.redirect("/get/Login") 
    const url_link = await URL_shortner.find({createdBy:req.user._id })
    return res.render("HOME", { URL:url_link })

}
//ADMIN PAGE SECTION GET
async function ADMIN_PAGE(req,res)
{
    const url_link=await URL_shortner.find({})
    return res.render("HOME",{URL:url_link})

}




//SIGNUP_PAGE_SECTION_GET   
async function STATIC_SIGNUP_PAGE(req, res) {
    const user_data = await USERDATA.find({})
    return res.render("SIGNUP")

}

//LOGIN_PAGE_SECTION_GET
async function STATIC_LOGIN_PAGE(req, res) {
    const login_data = await USERDATA.find({})
    return res.render("LOGIN", { EmailID: login_data.EmailID, PASSWORD: login_data.PASSWORD })
}

//GET SHORT URL SHORTID
async function SHORT_URL_SHORTID(req, res) {

    const Shortid = req.params.SHORTID
    if (!Shortid) return res.redirect("/get/Login")
    const entry = await URL_shortner.findOneAndUpdate(
        { shortID: Shortid },
        { $push: { CLICKTIME: [{ timestamp: Date.now() }] } },

    )
    if (!entry || !entry.URL_Link) {
        return res.render("URL_Not_Found", { error: "URL not found." })
    }
    res.redirect(entry.URL_Link)
}


async function SHORT_URL_CLICK(req, res) {
    if (!req.user) return res.redirect("/get/Login")
    const Shortid = req.params.SHORTID
    const data = await URL_shortner.findOne({ shortID: Shortid, createdBy: req.user._id })
    return res.json({
        TOTALCLICKS: data.CLICKTIME.length,
        analytics: data.CLICKTIME
    })
}
module.exports = { STATIC_HOME_PAGE, STATIC_SIGNUP_PAGE, STATIC_LOGIN_PAGE, SHORT_URL_CLICK, SHORT_URL_SHORTID,ADMIN_PAGE }