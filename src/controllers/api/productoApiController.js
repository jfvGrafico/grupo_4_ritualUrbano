const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

const productoApiController = {
  sqlSearch:
    'select categoryproducts.nombre, count(*) as "total" from products inner join categoryproducts on idCategoria = categoryproducts.id group by categoryproducts.id',

  list: async (req, res) => {
    try {
    //   let categorias = await db.sequelize.query(
    //     productoApiController.sqlSearch,
    //     { type: sequelize.QueryTypes.SELECT }
    //   );
      let productos = await db.Product.findAll({
        include: ["CategoryProduct"],
        attributes: { exclude: ["idCategoria"] }
      });

      let countCafe = 0;
      let countCafetera = 0;
      let countMerchandising = 0;
      let coutnOtrosProductos = 0;

      /* Contador de productos por categoria */

      for (let i = 0; i < productos.length; i++) {
        if (productos[i].CategoryProduct.nombre === "cafe") {
            countCafe += 1;
        }else if(productos[i].CategoryProduct.nombre === "cafetera") {
            countCafetera += 1;
        }else if(productos[i].CategoryProduct.nombre === "merchandising") {
            countMerchandising += 1;
        }else if(productos[i].CategoryProduct.nombre === "otrosProductos") {
            coutnOtrosProductos += 1;
        }
      }
      /* Imprime campo detail en producto con url api */

      for (let i = 0; i < productos.length; i++) {
        productos[i].setDataValue(
          "detail",
          `http://localhost:3000/api/products/${productos[i].id}`
        );
      }

      /* Imprime url de la foto para consumir */

      for (let i = 0; i < productos.length; i++) {
        productos[i].setDataValue(
          "urlImgen",
          `http://localhost:3000/${productos[i].imagen}`
        );
      }

      let response = {        
        status: 200,
        url: "http://localhost:3000/api/products",
        count: productos.length,
        countByCategory: [
          {
            cafe: countCafe,
            cafetera: countCafetera,
            merchandising: countMerchandising,
            otrosProductos: coutnOtrosProductos,
          },
        ],       
        data: productos,

      };

      res.status(200).json(response);

    } catch (error) {
      console.log(error);
    }
  },

  categorias: (req, res) => {
    db.CategoryProduct.findAll().then((categorias) => {
      let respuesta = {
        meta: {
          status: 200,
          listaProductos: "http://localhost:3000/api/products",
          count: categorias.length,          
        },
        categorias: categorias,
      };
      res.json(respuesta);
    });
  },

  detalleProducto: (req, res) => {
    db.Product.findByPk(req.params.id, { include: ["CategoryProduct"] }).then(
      (productos) => {
        // for (let i = 0; i < productos.length; i++) {
        //     productos[i].setDataValue(
        //       "urlImagen",
        //       `http://localhost:3000${productos[i].imagen}`
        //     );
        // };
        let respuesta = {
          
            status: 200,
            listaProductos: "http://localhost:3000/api/products",
            detalleProducto: {
            id: productos.id,
            nombre: productos.nombre,
            descripcion: productos.descripcion,
            peso: productos.peso,
            imagenProducto: `http://localhost:3000${productos.imagen}`,          
            precio: productos.precio,
            categoria: productos.CategoryProduct.nombre,            
          },
        };

        res.json(respuesta);
      }
    );
  },
};

module.exports = productoApiController;
