const path = require ("path")
const fs = require("fs")
const e = require("express")
const {validationResult} = require ("express-validator");

const db = require("../database/models");

const productoController = {
  /*     lista :  (req, res) =>{
      const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
      const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
        res.render("products/lista", { title: "Listado de Productos" , productos, carrito});
    }, */

  lista: function (req, res) {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    db.Product.findAll().then(function (productos) {
      res.render("products/lista", {
        title: "Listado de Productos",
        productos,
        carrito,
      });
    });
  },

  /* categoria: (req, res) => {
    const productos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    );
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    let catUnique = [];
    let arrayCat = [];
    productos.forEach((producto) => arrayCat.push(producto.categoria));
    catUnique = [...new Set(arrayCat)]; //hace un unique de arrayCat
    if (req.params.catID == undefined) {
      res.render("products/categoria", {
        title: "Categoria",
        productos,
        catUnique,
        carrito,
      });
    } else {
      let cat = req.params.catID;
      res.render("products/categoriaProducto", {
        title: "Prueba",
        productos,
        cat,
        carrito,
      });
    }
  }, */

  categoria: (req, res) => {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );

    let promProdut = db.Product.findAll({
      include: ["CategoryProduct"],
    });
    let promCategory = db.CategoryProduct.findAll();
    Promise.all([promProdut, promCategory])
      .then(([prodObj, categories]) => {
        if (req.params.catID == undefined) {
          res.render("products/categoria", {
            title: "Categoria",
            prodObj,
            categories,
            carrito,
          });
        } else {
          let cat = req.params.catID;
          res.render("products/categoriaProducto", {
            title: "Prueba",
            prodObj,
            cat,
            carrito,
          });
        }
      })
      .catch((error) => res.send(error));
  },
  /*   productoDetalle: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
    const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
    let prodObj = productos.find(
      (producto) => producto.id == req.params.prodID
    );
    res.render("products/productoDetalle", {
      title: "Detalle de Producto",
      prodObj, carrito
    });
  }, */

  productoDetalle: function (req, res) {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    db.Product.findByPk(req.params.prodID).then(function (prodObj) {
      res.render("products/productoDetalle", {
        title: "Detalle de Producto",
        prodObj,
        carrito,
      });
    });
  },

  /*   crear: (req, res) => {
    res.render("products/productoCrear", { title: "Crear Producto" });
  }, */

  crear: async (req, res) => {
    try {
      const categories = await db.CategoryProduct.findAll();
      return res.render("products/productoCrear", {
        title: "Crear Producto",
        categories
      });
    } catch (error) {
      res.send(error);
    }
  },

  /*   editar: (req, res) => {
    const productos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    );
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    let prodObj = productos.find(
      (producto) => producto.id == req.params.prodID
    );

    res.render("products/productoEditar", {
      title: "Editar Producto",
      prodObj,
    });
  }, */

  editar: (req, res) => {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    let productId = req.params.prodID;
    let promProdut = db.Product.findByPk(productId, {
      include: ["CategoryProduct"],
    });
    let promCategory = db.CategoryProduct.findAll();

    Promise.all([promProdut, promCategory])
      .then(([prodObj, categories]) => {
        return res.render("products/productoEditar", {
          title: "Editar Producto",
          prodObj,
          categories
        });
      })
      .catch((error) => res.send(error));
  },

  /* nuevoProd: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
    const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
    let imagenCargada;
    if (req.files[0] != undefined) {
      imagenCargada = "/img/" + req.files[0].originalname;
    } else {
      imagenCargada = "/img/tg-4.png";
    }

    let nuevoProd = {
      id: productos[productos.length - 1].id + 1,
      nombre: req.body.nombreProducto,
      descripcion: req.body.descipcionProducto,
      categoria: req.body.categoriaProducto,
      peso: req.body.pesoProducto,
      imagen: imagenCargada,
      precio: req.body.precioProducto,
    };
    productos.push(nuevoProd);
    let pathToFile = path.join(__dirname, "../data/products.json");
    nuevoArray = JSON.stringify(productos, null, " ");
    fs.writeFileSync(pathToFile, nuevoArray);
    res.redirect("/producto");
  },
 */

  nuevoProd: (req, res) => {    

      const resultValidation = validationResult(req);
      console.log(resultValidation.errors)
      console.log("Body",req.body)

      if (resultValidation.errors.length > 0) {
        return res.render("products/productoCrear", {          
          errors: resultValidation.mapped(),
          oldData: req.body            
        });
      }    
        
        let imagenCargada;
        if (req.file != undefined) {
          imagenCargada = "/img/" + req.file.filename;
        } else {
          imagenCargada = "/img/tg-4.png";
        }            

        // if (req.file) {
        db.Product.create({
          nombre: req.body.nombreProducto,
          descripcion: req.body.descripcionProducto,
          idCategoria: req.body.categoriaProducto,
          peso: req.body.pesoProducto,
          precio: req.body.precioProducto,
          imagen: imagenCargada,
          
        });
      
      
        res.redirect("/producto/editar/lista");
      },
  //       catch (error) {
  //         console.log(error)
  //     }
  //  },

  /*   eliminar: (req, res) => {
    const productos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    );
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    let newArray = productos.filter(
      (producto) => producto.id != req.params.prodID
    );
    let arrayAGuardar = JSON.stringify(newArray, null, " ");
    let pathToFile = path.join(__dirname, "../data/products.json");
    fs.writeFileSync(pathToFile, arrayAGuardar);
    res.redirect("/producto");
  }, */

  eliminar: (req, res) => {
    db.Product.destroy({
      where: {
        id: req.params.prodID,
      },
    });
    res.redirect("/producto/editar/lista");
  },

  /* resultado: (req, res) => {
    const productos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    );
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    let key = req.query.busqueda;
    let encontrados = productos.filter(
      (producto) =>
        producto.nombre.includes(key) || producto.descripcion.includes(key)
    );
    res.render("products/resultados", {
      title: "Resultados de la busqueda",
      encontrados,
    });
    console.log(encontrados);
  }, */

  resultado: (req, res) => {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    const Op = db.Sequelize.Op;
    let key = req.query.busqueda;

    db.Product.findAll({
      where: {
        nombre: 'cafe'
      },
    }).then((encontrados) => {
          console.log(encontrados);
      res.render("products/resultados", {
        title: "Resultados de la busqueda",
        encontrados,
      });
      console.log(encontrados);
    });
  },

  /* actualizar: (req, res) => {
    const productos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    );
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    let imagenCargada;
    let newObj = {};
    let obj = productos.find((producto) => producto.id == req.body.idProd);
    if (req.files[0] != undefined) {
      imagenCargada = `/img/${req.files[0].originalname}`;
    } else {
      imagenCargada = obj.imagen;
    }

    newObj = {
      id: req.body.idProd,
      nombre: req.body.nombreProducto,
      descripcion: req.body.descipcionProducto,
      categoria: req.body.categoriaProducto,
      peso: req.body.pesoProducto,
      imagen: imagenCargada,
      precio: req.body.precioProducto,
    };

    let newArray = productos.filter((producto) => producto.id != newObj.id);
    newArray.push(newObj);
    let arrayAGuardar = JSON.stringify(newArray, null, " ");
    let pathToFile = path.join(__dirname, "../data/products.json");
    fs.writeFileSync(pathToFile, arrayAGuardar);

    res.redirect("/producto/editar/lista");
  }, */

  actualizar: (req, res) => {
    
    let imagenCargada;
    let obj = db.Product.findByPk(req.body.id);
    console.log("ese es el" + obj)
    if (req.files[0] != undefined) {
      imagenCargada = `/img/${req.files[0].originalname}`;
    } else {
      imagenCargada = obj.imagen;
    }
    db.Product.update(
      {
        nombre: req.body.nombreProducto,
        descripcion: req.body.descipcionProducto,
        idCategoria: req.body.categoriaProducto,
        peso: req.body.pesoProducto,
        imagen: imagenCargada,
        precio: req.body.precioProducto,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect("/producto/editar/lista");
  },

  listaEditar: function (req, res) {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    db.Product.findAll().then(function (productos) {
      res.render("products/listaEditar", {
        title: "Lista de edicion",
        productos,
        carrito,
      });
    });
  },
};


module.exports = productoController;