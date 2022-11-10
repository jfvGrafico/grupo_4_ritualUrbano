const fs = require("fs")
const pach = require("path")

const checkAdminMiddleware = (req, res, next) =>{
    if (req.session.usuarioLogeado) {
        if(req.session.usuarioLogeado.category = "admin"){
            next();
        }
        res.redirect("/user/login");
    }
    res.redirect("/user/login");
    
}

module.exports = checkAdminMiddleware