const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const usersApiController = {
    listUsuario: (req, res) => {
        db.User.findAll({
            attributes: ['id', "first_name", "email"],
            
        })
        .then((users) => {
            for (let i = 0; i < users.length; i++) {
              users[i].setDataValue(
                "detail",
                `http://localhost:3001/api/users/${users[i].id}`
              );
            }
    
            let response = {
              meta: {
                count: users.length,
                status: 200,
              },
              data: { 
                users: users 
              }
            };
    
            res.status(200).json(response);
          })
          .catch((error) => res.json(error));
      },

    detalleUsuario: (req, res) => {
        db.User.findByPk(req.params.id,
            {
                attributes: { exclude: ['password', "idCategory"] }
            })
            .then(usuario => {
            let respuesta = {
                status : 200,
                id: usuario.id,
                name: usuario.first_name,
                email: usuario.email,
                imagenPerfil: `http://localhost:3001${usuario.image}`,             
                
            };
            res.json(respuesta);
        })
        .catch((error) => console.error(error));
    },
};


module.exports = usersApiController;