const JWT = require("jsonwebtoken")
const secretkey = "Gizmo"


function CREATE_TOKEN(user) {
    const payload={ _id: user._id,EmailID: user.EmailID,role:user.role}
    if(!payload) return null
    return JWT.sign(payload,secretkey,{expiresIn:"2 days"})
}

function GET_TOKEN(token) {
    try {
        return JWT.verify(token,secretkey);
    } catch (error) {
        console.error('JWT verification failed:', error.message)
        return null 
        
    }
}
module.exports = { CREATE_TOKEN, GET_TOKEN }