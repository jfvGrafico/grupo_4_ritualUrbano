const path = require ("path")
const userController = {
    login: (req, res) =>{
        res.render("login")
    },
    loginPost : (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    },

    registro: (req, res) =>{
        res.render("registro")
    },

    registroPost: (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    }

}

module.exports = userController;