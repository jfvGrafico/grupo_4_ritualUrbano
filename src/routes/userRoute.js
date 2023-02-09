const express = require("express");
const router = express.Router();
const multer = require("multer");

// Controller
const userController = require("../controllers/userController");

//config multer //

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/img/users/");
    },
    filename: function (req, file, cb) {       
        cb(null, file.originalname)
    },
});

  
  const upload = multer({ storage: storage });

// Middlewares
const uploadImgPerfil = require("../middleware/multer/multerImgPerfil");
const validationRegister = require("../middleware/validation/validateRegisterMiddleware");
const validationLogin = require("../middleware/validation/validatedLogingMiddleware");
const checkUserMiddleware = require("../middleware/checkUserMiddleware")
const checkCarritoUserMiddleware = require("../middleware/checkCarritoUserMiddleware");
const checkAdminMiddleware = require("../middleware/checkAdminMiddleware");


//rutas de usuario.

router.get("/login", checkUserMiddleware, userController.login )
router.post("/login", validationLogin, userController.loginPost )
router.get("/registro", checkUserMiddleware, userController.registro)
router.post("/registro", uploadImgPerfil.single("imagen"), validationRegister, userController.registroPost)
router.get("/logout" , userController.logout)
router.get("/profile",checkCarritoUserMiddleware, userController.profile);
router.put("/editProfile/:id",  uploadImgPerfil.single("AvatarUsuario"), userController.editProfile)
router.get("/:userID/editar", userController.editarUsuario);
router.post("/update/:id",  uploadImgPerfil.single("AvatarUsuario"), userController.actualizarUsuario);
router.delete("/:userID", userController.eliminarUsuario);
router.get("/editar/lista",checkAdminMiddleware, userController.listaUsuarios);
// router.get("/:userID", userController.usuarioDetalle);


module.exports = router;

