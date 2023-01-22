const express = require("express");
const usersApiController = require("../../controllers/api/usersApiController");
const router = express.Router();


//Rutas
//Listado de productos

router.get("/", usersApiController.listUsuario);
router.get("/:id", usersApiController.detalleUsuario);



module.exports = router;