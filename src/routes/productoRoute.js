const express = require ("express");
const productoController = require("../controllers/productoController");
const router = express.Router();

router.get ("/", productoController.lista )
router.get ("/productoDetalle/:prodID?", productoController.productoDetalle)
router.get ("/categoria", productoController.categoria )
router.get ("/categoria/cafes", productoController.cafes )
router.get ("/categoria/cafeteras", productoController.cafeteras )
router.get ("/categoria/otrosProductos", productoController.otrosProductos )
router.get ("/categoria/merchandising", productoController.merchandising )
router.get ("/carrito", productoController.carrito)
router.get("/crear" , productoController.crear )
router.get("/editar" , productoController.editar)

module.exports = router;