const express = require("express");
const mainController = require("../controllerss/mainController");
const router = express.Router();
const checkAdminMiddleware =require("../middleware/checkAdminMiddleware")

//Rutas principales.

router.get("/", mainController.index)
// router.get("/contacto", mainController.contacto)
// router.post("/contacto", mainController.contactoPost)
// router.get("/template", mainController.template)
// router.get("/gracias", mainController.gracias)
// router.get("/admin", checkAdminMiddleware, mainController.admin)

module.exports = router;