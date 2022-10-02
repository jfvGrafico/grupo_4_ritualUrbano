const path = require("path")

const mainController = {
    index :  (req, res) => {
        res.render("index")
    },
    contacto:  (req, res) =>{
        res.render("contacto")
    },

    contactoPost : (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    },

    template: (req, res) =>{
        res.render("template")
    },
    gracias : (req, res) => {
        res.render("gracias")
    }
}

module.exports = mainController;