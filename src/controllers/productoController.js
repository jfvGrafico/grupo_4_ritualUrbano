const path = require ("path")
const fs = require("fs")
const e = require("express")
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))

const productoController = {
    lista :  (req, res) =>{
        const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))
        res.render("products/lista", { title: "Listado de Productos" , productos});
    },
    categoria: (req, res) =>{
        if(req.params.catID == undefined) {
            res.render("products/categoria", { title: "Categoria" , productos});
        } else {
            if (req.params.catID == "cafes") {
                res.render("products/cafes", { title: "Cafes" , productos});
            } else {
                if (req.params.catID == "cafeteras"){
                    res.render("products/cafeteras", { title: "Cafeteras" , productos });
                }else {
                    if (req.params.catID == "otrosProductos"){
                        res.render("products/cafeteras", { title: "Cafeteras" , productos });
                    } else {
                        res.render("products/merchandising", { title: "Merchandising" , productos}); 
                    }
                }
            }
        }
    
    },
    carrito: (req, res)=>{
        res.render("products/carrito", { title: "Carrito" });
    },

  productoDetalle: (req, res) => {
    let prodObj = productos.find(
      (producto) => producto.id == req.params.prodID
    );
    res.render("products/productoDetalle", {
      title: "Detalle de Producto",
      prodObj,
    });
    console.log(prodObj);
  },

  crear: (req, res) => {
    res.render("products/productoCrear", { title: "Crear Producto" });
  },

  editar: (req, res) => {
    let prodObj = productos.find(
      (producto) => producto.id == req.params.prodID
    );

    res.render("products/productoEditar", {
      title: "Editar Producto",
      prodObj,
    });
  },

  nuevoProd: (req, res) => {
    let imagenCargada;
    if (req.files[0] != undefined) {
      imagenCargada = "/img/" + req.files[0].originalname;
    } else {
      imagenCargada = "/img/tg-4.png";
    }

    let nuevoProd = {
      id: req.body.idProd,
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
    let newArray = productos.filter(
      (producto) => producto.id != req.params.prodID
    );
    let arrayAGuardar = JSON.stringify(newArray, null, " ");
    let pathToFile = path.join(__dirname, "../data/products.json");
    fs.writeFileSync(pathToFile, arrayAGuardar);
    res.redirect("/producto");
  },
  resultado: (req, res) => {
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
    res.render("products/listaEditar", {
      title: "Lista de edicion",
      productos,
    });
  },

  guardarCarrito: (req, res) => {
    let producId = req.params.id;
    let producSelect = productos.find((producto) => producId == producto.id);
    /* if(arrayProduct !== null){
        arrayProduct.push(producSelect);
    } else { */
        let arrayProduct = [];
    arrayProduct.push(producSelect);
    
    
    
    console.log(arrayProduct)
  }
};


module.exports = productoController;