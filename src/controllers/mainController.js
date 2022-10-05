const path = require("path")
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("process");
const { request } = require("http");



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
      
          const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'sarah27@ethereal.email',
                pass: 'HTkdTdtBSzxRctNckN'
            }
        });

        const mailOptions = {
            from: `"${req.body.nombre}" ${req.body.apellido} <${req.body.email}>`,
            to: "cafeUrbano@ethereal.email",
            subject: "Contacto desde Cafe Urbano",
            text: req.body.consulta
        }

        transporter.sendMail(mailOptions, (error, info) =>{
            if(error){
                console.log(error)
            } else{
                console.log("Email enviado: " + info.response)            }
        })
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