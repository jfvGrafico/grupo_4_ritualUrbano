const path = require ("path")
const productoController = {
    detalle :  (req, res) =>{
        res.render("detalle")
    },
    categoria: (req, res) =>{
        res.render("categoria")
    },
    cafes : (req, res) =>{
        res.render("cafes")
    },
    cafeteras: (req, res) =>{
        res.render("cafeteras")
    },
    otrosProductos: (req, res) =>{
        res.render("otrosProductos")
    },
    merchandising: (req, res) =>{
        res.render("merchandising")
    },
    carrito: (req, res)=>{
        res.render("carrito")
    }
    
    

    
}

module.exports = productoController;