const path = require ("path")
const fs = require("fs")
const {validationResult} = require ("express-validator")
const { traceDeprecation } = require("process")
const bcrypt = require ("bcryptjs")
const crypto = require("crypto")
let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json") , "utf-8"))
const carrito = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
);

const userController = {
    login: (req, res) =>{
        res.render("users/login", { title: "Login", carrito });
    },
    loginPost : (req, res) =>{
        let usuarioLogeado = users.find(user => req.body.email == user.email && (bcrypt.compareSync(req.body.password, user.password)))
        if (usuarioLogeado != undefined){
            delete usuarioLogeado.password
            req.session.usuarioLogeado = usuarioLogeado;
            if(req.body.recuerdame != undefined){
                const token = crypto.randomBytes(64).toString("base64")
                res.cookie("userLogged" ,token, {maxAge : (1000*60*60*24*90)})
                usuarioLogeado.token = token
                fs.writeFileSync(path.resolve(__dirname, "../data/loggedUser.json") , JSON.stringify(usuarioLogeado , null, " "))
        }
        res.redirect("/")


    } else {
        res.redirect("/user/login")

    }
    },

    registro: (req, res) =>{
        res.render("users/registro", { title: "Registro", carrito });
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

            let imagenCargada;
            if (req.files[0] != undefined) {
                imagenCargada = "/img/" + req.files[0].originalname;
            } else {
                imagenCargada = "/img/noimage.jpg";
            }

            let usuarioAGuardar = {
                id: users[users.length - 1].id + 1,
                first_name: req.body.nombre,
                last_name: req.body.apellido,
                password: bcrypt.hashSync(req.body.password, 10), 
                email: req.body.email,
                category: "user",
                image: imagenCargada
            }

            users.push(usuarioAGuardar)

            fs.writeFileSync(path.resolve(__dirname, "../data/users.json") , JSON.stringify(users, null, " "))
            res.redirect("/")

            
        } else {
            res.render("users/registro",  {title : "registro", mensajeDeError : errors.array(), old : req.body})
        }
        

    },

    logout : (req, res) => {
        req.session.destroy();
        res.clearCookie("userLogged")  //dejamos que las coockies expiren solas.
        fs.writeFileSync(path.resolve(__dirname, "../data/loggedUser.json") , "")

        res.redirect("/")
    },

    profile : (req, res) => {
        res.render("users/profile", {title : "Perfil de usuario"})
    }

}

module.exports = userController;