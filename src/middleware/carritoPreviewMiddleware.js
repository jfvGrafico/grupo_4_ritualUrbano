const carritoPreviewMiddleware = (req, res, next) => {

    if (req.session.carritoSession != undefined){
        let carrito =  req.session.carritoSession
        let subtotal = 0;
        
       for( let i =0 ; i < carrito.length ; i++) {
            subtotal += carrito[i].precio
       }
        res.locals.subtotal = subtotal
        res.locals.carrito = carrito
    }

    next()
}

module.exports = carritoPreviewMiddleware