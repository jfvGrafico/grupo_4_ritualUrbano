const path = require ("path")
let productos = [
    {
        id : 0,
        nombre : "Cafe Tostado",
        descripcion: " Cafe tostado proveniente de Colombia.",
        imagen: "/img/cafe.png",
        precio: 1.123
    },
    {
        id : 1,
        nombre : "Cafe Tostado",
        descripcion: " Cafe tostado proveniente de Colombia.",
        imagen: "/img/cafe2.png",
        precio: 1.123
    }
]







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
        let prodID = req.params.prodID
        let prodObj = productos[prodID]
        res.render("products/productoDetalle", { title : "Detalle de Producto", prodID, prodObj})

        
    },

    crear: (req, res) =>{
        res.render("products/productoCrear" , {title : "Crear Producto"})
    },
    
    editar: (req, res) =>{
        res.render("products/productoEditar" , {title : "Editar Producto"})
    },
    
}

module.exports = productoController;