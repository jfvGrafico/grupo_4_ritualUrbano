const path = require ("path")
const fs = require("fs")
const productos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json") , "utf-8"))



const carritoController = {
  carrito: (req, res) => {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    res.render("products/carrito", { title: "Carrito", carrito });
  },

  guardarCarrito: (req, res) => {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );
    let productSelect = productos.find(
      (producto) => req.params.id == producto.id
    );
    carrito.push(productSelect);
    let arrayAGuardar = JSON.stringify(carrito, null, " ");
    let pathToFile = path.join(__dirname, "../data/carrito.json");
    fs.writeFileSync(pathToFile, arrayAGuardar);
    req.session.carritoSession = carrito;
    res.redirect("/producto");
  },
  carritoDelete: (req, res) => {
    const carrito = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
    );

    let aBorrar = carrito.filter((item) => item.id != req.params.carritoID);
    let aGuardar = JSON.stringify(aBorrar, null, " ");
    let pathToFile = path.join(__dirname, "../data/carrito.json");
    fs.writeFileSync(pathToFile, aGuardar);
    /* req.session.destroy(); */
    res.redirect("/producto/carrito");
  },
    compraFin: (req,res) => {
      const carrito = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../data/carrito.json"), "utf-8")
      );
      res.render("products/finalizarCompra", {title: "finalizarCompra", carrito})
  }
};

module.exports = carritoController