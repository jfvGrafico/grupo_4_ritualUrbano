const express = require ("express");
const {body} = require("express-validator")
const userController = require("../controllers/userController");
const router = express.Router();
const multer = require("multer")


//configuracion de multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

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
router.post("/registro",upload.any(), validateRegistro , userController.registroPost)
router.get("/logout" , userController.logout)
router.get("/profile", userController.profile)
router.put("/editProfile", upload.any(),userController.editProfile)


module.exports = router;

