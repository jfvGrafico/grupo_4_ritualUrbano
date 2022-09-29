const path = require ("path")
const userController = {
    login: (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/login.html"))
    },
    loginPost : (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    },

    registro: (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/registro.html"))
    },

    registroPost: (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    }

}

module.exports = userController;