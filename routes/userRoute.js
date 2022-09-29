const express = require ("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/login", userController.login )
router.get("/registro", userController.registro)
router.post("/login", userController.loginPost )
router.post("/registro", userController.registroPost)

module.exports = router;

