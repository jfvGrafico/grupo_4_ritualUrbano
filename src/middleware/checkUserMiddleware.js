const fs = require("fs");
const path = require("path");

const checkUserMiddleware = (req, res, next) =>{
    if(req.session.usuarioLogeado){
        res.redirect("/user/profile")
    }else{
    next();
    }
}

module.exports = checkUserMiddleware