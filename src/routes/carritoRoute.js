const express = require ("express");
const router = express.Router();
const carritoController = require("../controllers/carritoController");


//rutas de carrito

router.get ("/", carritoController.carrito)
router.delete ("/:carritoID", carritoController.carritoDelete)
router.post("/:id", carritoController.guardarCarrito)

module.exports = router;