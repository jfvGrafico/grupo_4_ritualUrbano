const path = require ("path")
const fs = require("fs")
const e = require("express")

const { validationResult } = require("express-validator");

const { Product, Category } = require("../../database/models");
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
/* const productsFilePath = path.join(__dirname, "../data/productsDataBase.json"); */
/* const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); */

const productoController = {
  /*     lista :  (req, res) =>{
      const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
      const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
        res.render("products/lista", { title: "Listado de Productos" , productos, carrito});
    }, */
    lista: async(req, res)=>{
      try{
        const products = await Product.findAll({
          include: [{ association: "categoryProduct" }],
        });
      res.render("products/lista", { products, carrito});
      } catch (error) {
      return res.send(error)
      }
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

    categoria: (req, res) =>{
      const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
      const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
      let catUnique = []
      let arrayCat = []
      productos.forEach(producto => arrayCat.push(producto.categoria))
      catUnique = [... new Set (arrayCat)]  //hace un unique de arrayCat 
      if(req.params.catID == undefined) {
        res.render  ("products/categoria", { title: "Categoria" , productos, catUnique, carrito});
    } else {  
            let cat = req.params.catID      
            res.render  ("products/categoriaProducto", { title: "Prueba" , productos, cat, carrito});
            }
   },



  productoDetalle: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
    const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
    let prodObj = productos.find(
      (producto) => producto.id == req.params.prodID
    );
    res.render("products/productoDetalle", {
      title: "Detalle de Producto",
      prodObj, carrito
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
        categories,
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
          categories,
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
    let imagenCargada;
    if (req.files[0] != undefined) {
      imagenCargada = "/img/" + req.files[0].originalname;
    } else {
      imagenCargada = "/img/tg-4.png";
    }

    db.Product.create({
      nombre: req.body.nombreProducto,
      descripcion: req.body.descipcionProducto,
      idCategoria: req.body.categoriaProducto,
      peso: req.body.pesoProducto,
      imagen: imagenCargada,
      precio: req.body.precioProducto,
    });
    res.redirect("/producto");
  },

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
    res.redirect("/producto");
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
    let obj = db.Product.findByPk(req.body.idProd);
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

  /*   listaEditar: (req, res) => {
    const productos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")
    );
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    res.render("products/listaEditar", {
      title: "Lista de edicion",
      productos,
    });
  }, */

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