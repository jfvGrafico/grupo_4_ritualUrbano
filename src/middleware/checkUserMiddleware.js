const fs = require("fs");
const patch = require("path");

const checkUserMiddleware = (req, res, next) =>{
    if(req.session.usuarioLogeado){
        res.redirect("/user/profile")
    }
    next();
}

module.exports = checkUserMiddleware