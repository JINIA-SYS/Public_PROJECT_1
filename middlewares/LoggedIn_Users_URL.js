
//const { GET_USER } = require("../services/SessionID.js")
const { GET_TOKEN } = require("../services/JWT.js")
async function LoggedInUsers_URL(req, res, next) {
   // const userid = req.cookies.token
   //const token=req.cookies.token
   console.log(req.headers)
   const userid=req.headers["authorization"]
   const token=userid.split("Bearer ")[1]
   
   console.log(token)
    const user = GET_TOKEN(token)
    if (user) {
        console.log("Token verification successful");
        console.log(user);
    } else {
        console.log("Token verification failed");
    }
    //const user=GET_USER(userid) 
    //if (!user) return res.redirect("/get/Login")
    //console.log(user)
    req.user = user
    next();
}
//const user=GET_USER(generatedSessionID) 
//const user = getToken(generatedSessionID)
module.exports = { LoggedInUsers_URL }

//if (!generatedSessionID) return res.redirect("/get/Login");
    //if (!user) return res.redirect("/get/Login")
    //console.log(generatedSessionID)