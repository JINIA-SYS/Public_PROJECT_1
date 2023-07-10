function authorized_role(roles = []) {
    return function (req, res, next) {
        if (!req.user) return res.redirect("/get/Login")

        if (!roles.includes(req.user.role)) return res.end("Unauthorized")
        return next();

    }
}

module.exports = { authorized_role }    