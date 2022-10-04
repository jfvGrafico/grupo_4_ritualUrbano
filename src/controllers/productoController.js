const path = require ("path")
const productoController = {
    detalle :  (req, res) =>{
        res.render("detalle", {title: "Detalle"})
    },
    categoria: (req, res) =>{
        res.render("categoria", {title: "Categoria"})
    },
    cafes : (req, res) =>{
        res.render("cafes", {title: "Cafes"})
    },
    cafeteras: (req, res) =>{
        res.render("cafeteras", {title: "Cafeteras"})
    },
    otrosProductos: (req, res) =>{
        res.render("otrosProductos", {title: "Otros Productos"})
    },
    merchandising: (req, res) =>{
        res.render("merchandising", {title: "Merchandising"})
    },
    carrito: (req, res)=>{
        res.render("carrito", {title: "Carrito"})
    }
    
    

    
}

module.exports = productoController;