const express = require("express");
const mainController = require("../controllers/mainController");
const router = express.Router();

router.get("/", mainController.index)
router.get("/contacto", mainController.contacto)
router.post("/contacto", mainController.contactoPost)
router.post("/template", mainController.template)
module.exports = router;