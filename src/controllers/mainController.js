const path = require("path")

const mainController = {
    index :  (req, res) => {
        res.render("index", {title: "Home"});
    },
    contacto:  (req, res) =>{
        res.render("contacto", {title: "Contacto"});
    },

    contactoPost : (req, res) =>{
        res.redirect("/")
        console.log(req.body)
    },

    template: (req, res) =>{
        res.render("template", {title: "Template"});
    },
    gracias : (req, res) => {
        res.render("gracias", {title: "Gracias"});
    },
    admin: (req, res) => {
        res.render("admin", {title: "Administrador"})
    },
    adminPost: (req, res) => {
        res.redirect("/")
        console.log(req.body)
    }
}

module.exports = mainController;