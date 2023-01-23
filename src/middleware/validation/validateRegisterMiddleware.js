const path = require("path");
const { body } = require("express-validator");

//validacion de registro de usuario

validationRegister = [
  body("nombre").notEmpty().isLength({ min: 2 }).withMessage("El nombre es un campo obligatorio"),
  body("apellido")
    .notEmpty()
    .isLength({ min: 2 })
    .withMessage("El apellido es un campo obligatorio"),
  body("email").isEmail().withMessage("Por favor ingrese un email valido").bail(),
  body("password").notEmpty()
  .isLength({ min: 8  })
  .withMessage("Recuerde introducir la contraseña")
  .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,),
];

module.exports = validationRegister