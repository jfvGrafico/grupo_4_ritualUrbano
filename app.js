const express = require("express"); 
const path = require("path");              
const app = express();                   
app.use(express.static(path.resolve(__dirname, "./public")));  //sirviendo contenido estatico
const puerto = 3000; //Webserver Port
app.listen(3000, () => {
    console.log(`Servidor Web corriendo en el puerto ${puerto}`);
})
app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get("/login", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})
app.get("/registro", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/registro.html"))
})
app.get("/carrito", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/carrito.html"))
})