const userAuthMiddleware = (req, res, next) => {
        res.locals.logeo = false  
    if(req.session.usuarioLogeado)
    {
        res.locals.logueo = true 
        res.locals.userID = req.session.usuarioLogeado.first_name
        res.locals.userType = req.session.usuarioLogeado.category
    }
    next()

}

module.exports = userAuthMiddleware