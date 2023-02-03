const path = require("path");
const { body } = require("express-validator");

//validacion de registro de usuario
console.log("Body", body);

module.exports = [

  body("nombre")
    .notEmpty()
    .withMessage("El nombre es un campo obligatorio")
    .isLength({ min: 2 }),
  body("apellido")
    .notEmpty()
    .withMessage("El apellido es un campo obligatorio")
    .isLength({ min: 2 }),
  body("email")
    .notEmpty()
    .withMessage("Por favor debes ingrese un email")
    .bail()
    .isEmail()
    .withMessage("Por favor ingrese un email valido"),
  body("password")
  .notEmpty().withMessage('Por favor ingresa una contraseña').bail()
  .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
  .isStrongPassword({ minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false })
  .withMessage('La contraseña debe contener al menos una mayuscula, minuscula, simbolo y numero'),
  body("imagen").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtensions = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtensions)) {
        throw new Error(
          `Las extensiones de archivos permitidas son:${acceptedExtensions.join(", ")} `)
      }
    }
    return true;
  })
]