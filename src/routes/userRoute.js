const express = require("express");
const router = express.Router();

// Controller
const userController = require("../controllers/userController");

// Middlewares
const uploadImgP = require("../middleware/multer/multerImg");
const validationRegister = require("../middleware/validation/validateRegisterMiddleware");
const validationLogin = require("../middleware/validation/validatedLogingMiddleware");
const checkUserMiddleware = require("../middleware/checkUserMiddleware")
const checkCarritoUserMiddleware = require("../middleware/checkCarritoUserMiddleware");


//rutas de usuario.

router.get("/login", checkUserMiddleware, userController.login )
router.post("/login", validationLogin, userController.loginPost )
router.get("/registro", checkUserMiddleware, userController.registro)
router.post("/registro", uploadImgP.single("imagen"), validationRegister, userController.registroPost)
router.get("/logout" , userController.logout)
router.get("/profile",checkCarritoUserMiddleware, userController.profile);
router.put("/editProfile",userController.editProfile)


module.exports = router;

