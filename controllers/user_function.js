    const USERDATA = require("../models/user_schema.js")

    const {CREATE_TOKEN} = require("../services/JWT.js")
    //const { v4: uuidv4 } = require("uuid")
    //const { SET_USER } = require("../services/SessionID.js")

    //SIGNUP_PAGE _SECTION_POST
    async function POST_SIGNUP(req, res) {
        const { firstName, EmailID, PASSWORD } = req.body;
        const user_data = await USERDATA.create({ firstName, EmailID, PASSWORD })
    
        return res.json({ status: "SIGNUP DONE Successfully" })
    }



    //LOGIN_PAGE_SECTION_POST
    async function POST_LOGIN(req, res) {
        const { EmailID, PASSWORD } = req.body
        const login_data = await USERDATA.findOne({ EmailID, PASSWORD })
        if (!login_data) { return res.render("LOGIN", { status: "INVALID EMAIL/PASSWORD,please enter again!" }) }
        const token = CREATE_TOKEN(login_data)
        console.log(token)
        //return res.json({token:token})
        res.cookie("token",token)
        
        return res.redirect("/get/Home")
    }


    module.exports = {
        POST_SIGNUP, POST_LOGIN
    }
    /*const { v4: uuidv4 } = require("uuid")    
    //const { SET_USER } = require("../services/SessionID.js")

    const SessionID = uuidv4();
        SET_USER(SessionID, login_data);
        res.cookie('UID', SessionID)
        console.log(SessionID)
    /*
        res.cookie('UID',token)
        return res.redirect("/get/Home")*/