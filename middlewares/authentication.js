const { GET_TOKEN } = require("../services/JWT")

function authentication(req, res, next) {
    //const authorizationvalue = req.headers["authorization"]
    const tokencookie=req.cookies["token"]
    req.user = null
    if (!tokencookie)return next();

    const token = tokencookie
    const user = GET_TOKEN(token)
    req.user = user;
    return next()

    

}

module.exports = { authentication }