const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const usersApiController = {
    detalleUsuario: (req, res) => {
        db.User.findAll({
            
            attributes: { exclude: ['password', "idCategory"] },
            
        })
        .then(users => {
            let respuesta = [{
                meta: {
                    status : 200,
                    count: users.length,
                    url: "api/users",                    
                },
                users: users
            }]
                res.json(respuesta);
            })
    },

    usuarioId: (req, res) => {
        db.User.findByPk(req.params.id,
            {
                attributes: { exclude: ['password', "idCategory"] }
            })
                .then(usuario => {
            let respuesta = {
                meta: {
                    status : 200,
                    url: "api/products/:id",
                    data: usuario,
                   
                },
            }
            
                res.json(respuesta);
            })


    }
}


module.exports = usersApiController;