const path = require ("path")
const productoController = {
    detalle :  (req, res) =>{
        res.sendFile(path.resolve(__dirname, "../views/detalle.html"))
    },
    categoria: (req, res) =>{
        res.sendFile(path.resolve(__dirname,"../views/categoria.html"))
    },
    cafes : (req, res) =>{
        res.sendFile(path.resolve(__dirname,"../views/cafes.html"))
    },
    cafeteras: (req, res) =>{
        res.sendFile(path.resolve(__dirname,"../views/cafeteras.html"))
    },
    otrosProductos: (req, res) =>{
        res.sendFile(path.resolve(__dirname,"../views/otrosProductos.html"))
    },
    merchandising: (req, res) =>{
        res.sendFile(path.resolve(__dirname,"../views/merchandising.html"))
    },
    carrito: (req, res)=>{
        res.sendFile(path.resolve(__dirname, "../views/carrito.html"))
    }
    
    

    
}

module.exports = productoController;