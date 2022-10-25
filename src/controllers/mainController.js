const path = require("path")
const fs = require("fs")
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");
const { request } = require("http");
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))

const mainController = {
    index :  (req, res) => {
        res.render("index", {title: "Home" , productos , carrito});
    },
    contacto:  (req, res) =>{
        res.render("contacto", {title: "Contacto"});
    },

    contactoPost : (req, res) =>{
        
        console.log(req.body)
      
          const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'reagan.leffler27@ethereal.email',
                pass: 'UpbmXS1TtEjuteAgQs'
            }
        });

        const mailOptions = {
            from: `"${req.body.nombre}" ${req.body.apellido} <${req.body.email}>`,
            to: "CafeUrbano@ethereal.email",
            subject: "Contacto desde Cafe Urbano",
            text: req.body.consulta
        }

        transporter.sendMail(mailOptions, (error, info) =>{
            if(error){
                console.log(error)
            } else{
                console.log("Email enviado: " + info.response)            }
        })

        res.redirect("/")
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
}

module.exports = mainController;