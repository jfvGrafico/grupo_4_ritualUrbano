const carritoPreviewMiddleware = (req, res, next) => {
    
        let subtotal = 0;

    if (req.session.carritoSession != undefined){
        let carrito =  req.session.carritoSession
       for( let i =0 ; i < carrito.length ; i++) {
            subtotal += carrito[i].precio * 1 //El * 1 es para converitr a int el precio.
       }
        res.locals.subtotal = subtotal
        res.locals.carrito = carrito
    }

    next()
}

module.exports = carritoPreviewMiddleware