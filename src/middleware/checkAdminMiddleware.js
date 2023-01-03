const fs = require("fs")
const pach = require("path")

const checkAdminMiddleware = (req, res, next) =>{
  console.log("checkAdminMiddleware");
    if (req.session.usuarioLogeado) {
        if(req.session.usuarioLogeado.idCategory == "admin"){
        return next();
        }else{
          console.log("no es admin");
          res.redirect("/user/login");
        }
    }else{
      console.log("no existe usuario");
      res.redirect("/user/login");
    }
}

module.exports = checkAdminMiddleware