const fs = require("fs")
const pach = require("path")

const checkAdminMiddleware = (req, res, next) =>{
    if (req.session.usuarioLogeado) {
        if(req.session.usuarioLogeado.category = "admin"){
            next();
        }
        console.log("no es admin");
        res.redirect("/user/login");
        
    }
    console.log("no existe usuario")
    res.redirect("/user/login");
    
}

module.exports = checkAdminMiddleware