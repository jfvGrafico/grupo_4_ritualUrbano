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
        res.send(req.body)
    },

    registro: (req, res) =>{
        res.render("users/registro", {title: "Registro"})
    },

    registroPost: (req, res) =>{
        let errors = validationResult(req)
        if(errors.isEmpty()){
            res.send(req.body)
        } else {
            res.render("users/registro",  {title : "registro", mensajeDeError : errors.mapped()})
        }
        

    }

}

module.exports = userController;