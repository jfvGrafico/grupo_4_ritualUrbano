const userAuthMiddleware = (req, res, next) => {
        res.locals.logeo = false  
    if(req.session.usuarioLogeado != undefined)
    {
        res.locals.logueo = true  
        res.locals.userType = req.session.usuarioLogeado.category
    }
    next()

}

module.exports = userAuthMiddleware