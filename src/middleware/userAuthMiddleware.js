const userAuthMiddleware = (req, res, next) => {
        res.locals.logeo = false  
    if(req.session.usuarioLogeado)
    {
        res.locals.logueo = true 
        res.locals.usuarioFull = req.session.usuarioLogeado
        res.locals.userType = req.session.usuarioLogeado.category

    }
    next()

}

module.exports = userAuthMiddleware