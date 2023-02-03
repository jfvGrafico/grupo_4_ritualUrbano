const path = require("path");
const { body } = require("express-validator");

console.log("Body", body);

module.exports = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("Por favor debe ingresar el nombre del producto")
    .bail()
    .isLength({ min: 5 })
    .withMessage("El nombre del producto debe tener un mínimo de 5 caracteres"),
 
  body("descipcionProducto")
    .notEmpty()
    .withMessage("Su producto debe ingresar la descripcion del producto")
    .isLength({ min: 20 })
    .withMessage("La descripción del producto debe tener un mínimo de 20 caracteres"),
  body("categoriaProducto").notEmpty().withMessage("Seleccione una categoria"),
  body("pesoProducto").notEmpty().withMessage("Por favor debe ingresar el peso del producto"),
  body("precioProducto").notEmpty().withMessage("Por favor debe ingresar el precio del producto"),
  body("imagenProducto").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"];
    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtensions = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtensions)) {
        throw new Error(
          `Las extensiones de archivos permitidas son:${acceptedExtensions.join(", ")} `)
      }
    }
    return true;
  })
]