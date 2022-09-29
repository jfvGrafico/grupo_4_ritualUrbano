const path = require("path")

const mainController = {
    index :  (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/index.html"))
    },
    contacto:  (req, res) =>{
        res.sendFile(path.resolve(__dirname,"../views/contacto.html"))
    },

    contactoPost : (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    },

    template: (req, res) =>{
        res.render("template")
    }
}

module.exports = mainController;