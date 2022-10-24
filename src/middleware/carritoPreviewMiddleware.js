const carritoPreviewMiddleware = (req, res, next) => {

    console.log(req.session.carritoSession)

    next()
}

module.exports = carritoPreviewMiddleware