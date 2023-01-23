const express = require("express");
const router = express.Router();

// Controller
const userController = require("../controllers/userController");

// Middlewares
const upload = require("../middleware/multer/multerImg");
const validationRegister = require("../middleware/validation/validateRegisterMiddleware");
const checkUserMiddleware = require("../middleware/checkUserMiddleware")
const checkCarritoUserMiddleware = require("../middleware/checkCarritoUserMiddleware");


//rutas de usuario.

router.get("/login", checkUserMiddleware, userController.login )
router.post("/login", userController.loginPost )
router.get("/registro", checkUserMiddleware, userController.registro)
router.post("/registro", validationRegister, userController.registroPost)
router.get("/logout" , userController.logout)
router.get("/profile",checkCarritoUserMiddleware, userController.profile);
router.put("/editProfile",userController.editProfile)


module.exports = router;

