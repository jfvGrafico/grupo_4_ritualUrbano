const express = require("express");
const productoController = require("../controllers/productoController");
const router = express.Router();
const multer = require("multer");
const checkAdminMiddleware = require("../middleware/checkAdminMiddleware");

//config multer //

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/img/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

//rutas de producto

router.get("/", productoController.lista);
router.get("/categoria/:catID?", productoController.categoria);
router.get("/crear",checkAdminMiddleware, productoController.crear);
router.post("/", upload.any(), productoController.nuevoProd);
router.get("/:prodID/editar", productoController.editar);
router.put("/", upload.any(), productoController.actualizar);
router.get("/resultado", productoController.resultado);
router.delete("/:prodID", productoController.eliminar);
router.get("/editar/lista",checkAdminMiddleware, productoController.listaEditar);
router.get("/:prodID", productoController.productoDetalle); // Esta linea debe ser la ultima ruta por que se rompe

module.exports = router;
