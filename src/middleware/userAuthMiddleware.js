const fs = require("fs")
const path = require ("path")
const userAuthMiddleware = (req, res, next) => {
        res.locals.logeo = false  
    if(req.session.usuarioLogeado)
    {
        res.locals.logueo = true 
        res.locals.usuarioFull = req.session.usuarioLogeado
        res.locals.userType = req.session.usuarioLogeado.category

    } else if(req.cookies.userLogged){
        const cookieToken = req.cookies.userLogged //leo la cookie y saco el token.
        const userCookie = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/loggedUser.json"), "utf-8"))
        const allUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../data/users.json"), "utf-8"))
        if(userCookie.token == cookieToken){ //me fijo si lo que hay en la cookie coincide con el token del usuario logeado
         const userToLogIn =  allUsers.find(usuario => usuario.id == userCookie.id) //busco al usuario logeado en la base de usuarios
         req.session.usuarioLogeado = userToLogIn  //pongo al usuario en session
        }
    }
    next()

}

module.exports = userAuthMiddleware