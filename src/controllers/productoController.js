const path = require ("path")
const productos = require("../data/products")






const productoController = {
    lista :  (req, res) =>{

        res.render("products/lista", { title: "Listado de Productos" , productos});
    },
    categoria: (req, res) =>{
        res.render("products/categoria", { title: "Categoria" });
    },
    cafes : (req, res) =>{
        res.render("products/cafes", { title: "Cafes" });
    },
    cafeteras: (req, res) =>{
        res.render("products/cafeteras", { title: "Cafeteras" });
    },
    otrosProductos: (req, res) =>{
        res.render("products/otrosProductos", { title: "Otros Productos" });
    },
    merchandising: (req, res) =>{
        res.render("products/merchandising", { title: "Merchandising" });
    },
    carrito: (req, res)=>{
        res.render("products/carrito", { title: "Carrito" });
    },

   productoDetalle : (req, res) => {
        let prodObj = productos[req.params.prodID]
        res.render("products/productoDetalle", { title : "Detalle de Producto", prodObj})
    },

    crear: (req, res) =>{
        res.render("products/productoCrear" , {title : "Crear Producto"})
    },
    
    editar: (req, res) =>{
        res.render("products/productoEditar" , {title : "Editar Producto"})
    }
    
}

module.exports = productoController;