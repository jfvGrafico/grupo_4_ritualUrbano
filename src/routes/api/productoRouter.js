const express = require("express");
const productoApiController = require("../../controllers/api/productoApiController");
const router = express.Router();


//Rutas
//Listado de productos
router.get('/', productoApiController.list);
router.get('/category', productoApiController.categorias);
router.get("/:id", productoApiController.detalleProducto);

module.exports = router;