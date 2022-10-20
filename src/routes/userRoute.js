const express = require ("express");
const {body} = require("express-validator")
const userController = require("../controllers/userController");
const router = express.Router();

//validacion de registro de usuario
validateRegistro = [
    body("nombre").notEmpty().withMessage("El nombre es un campo obligatorio"),
    body("email").isEmail().withMessage("Por favor ingrese un email valido"),
    body("password").notEmpty().withMessage("Recuerde introducir la contraseña"),
    body("rpassword").notEmpty().withMessage("Recuerde repetir la contraseña")
]

//rutas de usuario.
router.get("/login", userController.login )
router.get("/registro", userController.registro)
router.post("/login", userController.loginPost )
router.post("/registro",validateRegistro, userController.registroPost)

module.exports = router;

