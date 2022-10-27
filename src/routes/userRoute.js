const express = require ("express");
const {body} = require("express-validator")
const userController = require("../controllers/userController");
const router = express.Router();

//validacion de registro de usuario
validateRegistro = [
    body("nombre").notEmpty().withMessage("El nombre es un campo obligatorio"),
    body("apellido").notEmpty().withMessage("El apellido es un campo obligatorio"),
    body("email").isEmail().withMessage("Por favor ingrese un email valido"),
    body("password").notEmpty().withMessage("Recuerde introducir la contraseña"),
]

//rutas de usuario.

router.get("/login", userController.login )
router.post("/login", userController.loginPost )
router.get("/registro", userController.registro)
router.post("/registro",validateRegistro, userController.registroPost)
router.get("/logout" , userController.logout)
router.get("/profile", userController.profile)

module.exports = router;

