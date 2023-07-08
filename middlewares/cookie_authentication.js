//const { GET_USER } = require("../services/SessionID.js")
const { GET_TOKEN } = require("../services/JWT.js")


async function LoggedInUsers(req, res, next) {
    console.log(req.headers)
    const userid=req.headers["authorization"]
    const token=userid.split('Bearer ')[1]

    //const userid=req.cookies.token
    console.log(token)
    const user = GET_TOKEN(token)
    //const user=GET_USER(userid)
    if (user) {
        console.log("Token verification successful");
        console.log(user);
    } else {
        console.log("Token verification failed");
    }
    //
    console.log(user)
    if (!user||!userid) return res.redirect("/get/Login")
    req.user = user
    next();
}

//const user=GET_USER(generatedSessionID)
//const user = getToken(generatedSessionID)
module.exports = {
    LoggedInUsers
}