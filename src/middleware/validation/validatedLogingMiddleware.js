const path = require("path");
const { body } = require("express-validator");

//validacion de login de usuario

module.exports = [
  
  body("email")
  .notEmpty()
  .withMessage("Por favor debe ingresar un email").bail()
    .isEmail()
    .withMessage("Por favor ingrese un email valido"),
  body("password")
  .notEmpty()
  .withMessage("Recuerde introducir la contraseña").bail()
  .isLength({ min: 6  })  
  .withMessage("Debe contener al menos un número, mayúsculas y minúsculas, mínimo 8 o más caracteres" )
  .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
  .withMessage("Debe contener al menos un número, mayúsculas y minúsculas, mínimo 8 o más caracteres" ),

];