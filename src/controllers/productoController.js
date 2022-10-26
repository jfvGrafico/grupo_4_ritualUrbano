const path = require ("path")
const fs = require("fs")
const e = require("express")



const productoController = {
    lista :  (req, res) =>{
      const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
      const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
        res.render("products/lista", { title: "Listado de Productos" , productos, carrito});
    },
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

  crear: (req, res) => {
    res.render("products/productoCrear", { title: "Crear Producto" });
  },

  editar: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
    const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
    let prodObj = productos.find(
      (producto) => producto.id == req.params.prodID
    );

    res.render("products/productoEditar", {
      title: "Editar Producto",
      prodObj,
    });
  },

  nuevoProd: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
    const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
    let imagenCargada;
    if (req.files[0] != undefined) {
      imagenCargada = "/img/" + req.files[0].originalname;
    } else {
      imagenCargada = "/img/tg-4.png";
    }

    let nuevoProd = {
      id: (productos.length +1),
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

  eliminar: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
    const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
    let newArray = productos.filter(
      (producto) => producto.id != req.params.prodID
    );
    let arrayAGuardar = JSON.stringify(newArray, null, " ");
    let pathToFile = path.join(__dirname, "../data/products.json");
    fs.writeFileSync(pathToFile, arrayAGuardar);
    res.redirect("/producto");
  },
  resultado: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
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
  },

  actualizar: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
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
  },

  listaEditar: (req, res) => {
    const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
const carrito = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/carrito.json") , "utf-8"))
    res.render("products/listaEditar", {
      title: "Lista de edicion",
      productos,
    });
  }
}


module.exports = productoController;