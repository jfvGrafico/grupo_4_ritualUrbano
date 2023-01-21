const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


const productoApiController = {

    sqlSearch:'select categoryproducts.nombre, count(*) as "total" from products inner join categoryproducts on idCategoria = categoryproducts.id group by categoryproducts.id',
    
    list: async (req, res) => {
        
        try {
            let productos = await db.Product.findAll({ include: ["CategoryProduct"] });
            let categorias = await db.sequelize.query(productoApiController.sqlSearch, {type: sequelize.QueryTypes.SELECT})  

            res.status(200).json(
                {
                    meta: {
                        status: 200,
                        count: productos.length,
                        countByCategory: categorias,
                        url: 'api/products'
                    },
                    data: {
                        products:productos
                    }

                }
            )
        } catch (error) {
            console.log(error)
        }
    },

    categorias: (req, res) => {
        db.CategoryProduct.findAll()
        .then(categorias => {
            let respuesta = {
                meta: {
                    status : 200,
                    count: categorias.length,
                    url: "api/products",                    
                },
                categorias: categorias
            }
                res.json(respuesta);
            })
    },

    detalleProducto: (req, res) => {
        db.Product.findByPk(req.params.id, {include: ["CategoryProduct"],})
                .then(producto => {
            let respuesta = {
                meta: {
                    status : 200,
                    url: "api/products/:id",
                    producto: producto,
                   
                },
            }
            
                res.json(respuesta);
            })


    }
}


module.exports = productoApiController;