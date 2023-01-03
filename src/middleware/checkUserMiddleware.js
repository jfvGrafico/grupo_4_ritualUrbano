const fs = require("fs");
const path = require("path");

const checkUserMiddleware = (req, res, next) =>{
    console.log("checkUserMiddleware");
    if(req.session.usuarioLogeado){
        res.redirect("/user/profile")
    }else{
    next();
    }
}

module.exports = checkUserMiddleware