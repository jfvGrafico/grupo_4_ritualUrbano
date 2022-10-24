const path = require ("path")
const fs = require("fs")
const {validationResult} = require ("express-validator")
const { traceDeprecation } = require("process")
let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json") , "utf-8"))

const userController = {
    login: (req, res) =>{
        res.render("users/login", {title: "Login"})
    },
    loginPost : (req, res) =>{
        users.forEach(user => {
            if(req.body.email == user.email && req.body.password == user.password){
                let usuarioLogeado = user;
                req.session.usuarioLogeado = usuarioLogeado;
                    if(req.body.recuerdame != undefined){
                        res.cookie("userLogged" , user.email, {maxAge : (60000 * 60)})
                        res.cookie("userType" , user.category, {maxAge : (60000 * 60)})
                    }
                res.redirect("/")
            } else {
                res.redirect("/user/login")
            }    
        })
    },

    registro: (req, res) =>{
        res.render("users/registro", {title: "Registro"})
    },

    registroPost: (req, res) =>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            users.forEach(usuario => {
                if(usuario.email == req.body.email){
                    res.send("El usuario ya existe")
                    res.redirect("/")
                }
                
            });

            let usuarioAGuardar = {
                id : (users.length) +1,
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                password: req.body.password,
                email: req.body.email,
                category: "user",
                image: "http://dummyimage.com/159x100.png/dddddd/000000"
            }

            users.push(usuarioAGuardar)

            fs.writeFileSync(path.resolve(__dirname, "../data/users.json") , JSON.stringify(users, null, " "))
            res.redirect("/")

            
        } else {
            res.render("users/registro",  {title : "registro", mensajeDeError : errors.array(), old : req.body})
        }
        

    }

}

module.exports = userController;