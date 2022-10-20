const path = require ("path")
const fs = require("fs")
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
        res.send(req.body)
    }

}

module.exports = userController;