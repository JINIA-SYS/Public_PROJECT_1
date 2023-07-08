const fs = require("fs")
function LogsReqRes(filename) {

    return (req, res, next) => {
        fs.appendFile(filename,
            `${Date.now}:${req.ip} ${req.method}:${req.path}\n`,
            (err, data) => {
                next()
            })
    }
}

module.exports={
    LogsReqRes
}