const path = require ("path")
const productoController = {
    detalle :  (req, res) =>{
        res.render("products/detalle", { title: "Detalle" });
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
    }
    
    

    
}

module.exports = productoController;