const fs = require("fs")
const path = require ("path")
const db = require("../database/models");

const userAuthMiddleware = (req, res, next) => {
    console.log("userAuthMiddleware");
        res.locals.logeo = false  
    if(req.session.usuarioLogeado) //si existe el usuario en sesion
    {
        console.log("si existe el usuario en sesion");
        res.locals.logueo = true 
        res.locals.usuarioFull = req.session.usuarioLogeado                   //lo paso a la vista.
        /* res.locals.userType = req.session.usuarioLogeado.category */
        res.locals.userType = req.session.usuarioLogeado.idCategory;
        return next()


    } else if(req.cookies.userLogged){
        console.log("leo la cookie y saco el token");
        const cookieToken = req.cookies.userLogged //leo la cookie y saco el token.
        const userCookie = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/loggedUser.json"), "utf-8"))
        /* const allUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json"), "utf-8")) */

        if(userCookie.token == cookieToken){ //me fijo si lo que hay en la cookie coincide con el token del usuario logeado
            db.User.findAll({include: ["CategoryUser"]})
            .then((allUsers) => {
                
                const userToLogIn =  allUsers.find(usuario => usuario.id == userCookie.id) //busco al usuario logeado en la base de usuarios
                userToLogIn.idCategory = userToLogIn.CategoryUser.nombre;
                console.log(userToLogIn.idCategory);
                req.session.usuarioLogeado = userToLogIn  //pongo al usuario en session
            })
         
        }
    }
    next()

}

module.exports = userAuthMiddleware