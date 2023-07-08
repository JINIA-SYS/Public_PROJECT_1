
const shortid = require("shortid")
const fs = require("fs")
const URL_shortner = require("../models/mongoose_schema")


//POSTING SHORT_URL
async function POST_Short_URL(req, res) {

    const body = req.body
    if (!body.URL_Link) return res.status(400).json({ status: "Please provide the URL Link first!" })
    

    const URL_short = shortid()
    
    const data = await URL_shortner.find({createdBy: req.user._id})

    const URL = await URL_shortner.create({
        shortID: URL_short,
        URL_Link: body.URL_Link,
        CLICKTIME: [],
        createdBy: req.user._id,
    })
    return res.render("HOME", { status: "SHORTID GENERATED", shortid: URL_short, URL: data })
}



module.exports = { POST_Short_URL }



    //console.log(entry + entry.URL_Link)

