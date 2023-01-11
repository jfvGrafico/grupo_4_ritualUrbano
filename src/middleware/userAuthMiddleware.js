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
            /* db.User.findAll({include: ["CategoryUser"]})
            .then((allUsers) => {
                const userToLogIn =  allUsers.find(usuario => usuario.id == userCookie.id) //busco al usuario logeado en la base de usuarios
                userToLogIn.idCategory = userToLogIn.CategoryUser.nombre;
                console.log(userToLogIn.idCategory);
                req.session.usuarioLogeado = userToLogIn  //pongo al usuario en session
            }) */
            console.log("LAS COKIES COINCIDEN" + " " + userCookie.token + " " + cookieToken  + " " + userCookie.id);
            let promUser = db.User.findOne(
              {
                where: {
                  id: userCookie.id,
                },
              },
            );
            let promCategory = db.CategoryUser.findAll()
            Promise.all([promUser, promCategory])
            .then(([userToLogIn, allCategory]) => {
              console.log(
                "!!!!!!!!!!!!!!!!!!!!!!" +
                  " " +
                  userToLogIn.id +
                  " " +
                  userToLogIn.first_name /* +
                  " " +
                  userToLogIn.allCategory.nombre */ /* CategoryUser.nombre */
              );
              console.log("IMPRIMIENDO LAS CATEGORIAS" + " " + allCategory);

                if (userToLogIn.idCategory == allCategory.id) {
                  userToLogIn.idCategory = allCategory.name;
                  console.log(
                    "IMPRIMIENDO LA CATEGORIA SELECCIONADA" +
                      " " +
                      userToLogIn.idCategory
                  );
                  req.session.usuarioLogeado = userToLogIn;
                  res.locals.logueo = true;
                  res.locals.usuarioFull = req.session.usuarioLogeado;
                  res.locals.userType = req.session.usuarioLogeado.idCategory;
                }

              
                /* userToLogIn.CategoryUser.nombre; */
                /* userToLogIn.idCategory = "user";  */
              
            });
return next();
        }

    }
     return next();
}

module.exports = userAuthMiddleware