const express = require ("express");
const productoController = require("../controllers/productoController");
const router = express.Router();
const multer = require("multer");
const { Router } = require("express");


//config multer //

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/img/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



router.get ("/", productoController.lista )
router.get ("/categoria", productoController.categoria )
router.get ("/categoria/cafes", productoController.cafes )
router.get ("/categoria/cafeteras", productoController.cafeteras )
router.get ("/categoria/otrosProductos", productoController.otrosProductos )
router.get ("/categoria/merchandising", productoController.merchandising )
router.get ("/carrito", productoController.carrito)
router.get("/crear" , productoController.crear )
router.post("/" , upload.any(), productoController.nuevoProd)
router.get("/:prodID/editar" , productoController.editar)
router.put("/", upload.any(), productoController.actualizar)
router.get("/resultado",  productoController.resultado)
router.delete("/:prodID", productoController.eliminar)
router.get("/editar/lista", productoController.listaEditar)
router.post("/carrito/:id", productoController.guardarCarrito)
router.get ('/:prodID', productoController.productoDetalle) // Esta linea debe ser la ultima ruta por que se rompe




module.exports = router;