const fs = require("fs");
const path = require("path");

const checkCarritoUserMiddleware = (req, res, next) =>{
    console.log(req.session.usuarioLogeado.category)
    if(!req.session.usuarioLogeado){
        res.redirect("/user/login");
    }
next();
}
module.exports = checkCarritoUserMiddleware