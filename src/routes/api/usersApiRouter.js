const express = require("express");
const usersApiController = require("../../controllers/api/usersApiController");
const router = express.Router();


//Rutas
//Listado de productos

router.get("/", usersApiController.detalleUsuario);
router.get("/:id", usersApiController.usuarioId);



module.exports = router;