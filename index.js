const express = require("express");
const app = express()
const fs = require("fs")
const path = require("path")
const shortid = require("shortid")
const URL_shortner = require("./models/mongoose_schema.js")

//MONGODB Connection
const { MONGODB_connect } = require("./mongoose_connect.js")
MONGODB_connect(process.env.MONGODB??"mongodb://127.0.0.1:27017/URL")

//EJS HTML TEMPALATE ENGINE SECTION
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

//SERVER-PORT SECTION
const PORT = process.env.PORT||8003;
app.listen(PORT, () => {
    console.log(`Server Running at PORT: ${PORT}`)
})




//Middlewares_SECTION
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("1st Middleware Connected")
    next();
})
app.use((req, res, next) => {
    console.log("2nd Middlewares Connected")
    next();
})

//Logs Middleware Authentication
const { LogsReqRes } = require("./middlewares/logs.js")
app.use(LogsReqRes("Logs_data.txt"))

//Cookie Middleware Authentication
const cookieparser = require("cookie-parser")
app.use(cookieparser())
//const { LoggedInUsers } = require("./middlewares/cookie_authentication.js")
//const { LoggedInUsers_URL } = require("./middlewares/LoggedIn_Users_URL.js")

const {authentication}=require("./middlewares/authentication.js")
const {authorized_role}=require("./middlewares/authorization.js")


//ROUTES_SECTION
//URL ROUTER
const URLROUTER = require("./routes/url.js")
app.use(authentication)
app.use("/get/url",authorized_role(["NORMAL"]),URLROUTER)

//USER ROUTER
const USERROUTER = require("./routes/user.js")  
app.use("/get/user",USERROUTER)


//STATIC ROUTER
const STATICROUTER = require("./routes/STATICROUTES.js");

app.use("/get", STATICROUTER)


/*
app.get("/test",async(req,res)=>{
    const url_link=await URL_shortner.find({})
    return res.render("HOME",{URL:url_link})
})

app.post("/test",async(req,res)=>{
    const body=req.body
    //if(!body.URL_Link)return res.status(400).json({status:"Please provide the URL Link first!"})
    const URL_short=shortid()
    
    const URL=await URL_shortner.create({
        shortID:URL_short,
        URL_Link:body.URL_Link, 
        CLICKTIME:[]
    })
    return res.render("HOME",{link:URL.URL_Link,})

})*/











/*return res.send(`<ol>${url_link.map(element=>`<li>${element.shortID}---${element.URL_Link}----${element.CLICKTIME.length}</li>`).join("")}
</ol>`)*/