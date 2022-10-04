const path = require ("path")
const userController = {
    login: (req, res) =>{
        res.render("login", {title: "Login"})
    },
    loginPost : (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    },

    registro: (req, res) =>{
        res.render("registro", {title: "Registro"})
    },

    registroPost: (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    }

}

module.exports = userController;