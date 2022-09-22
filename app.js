const express = require("express"); 
const path = require("path");              
const app = express();                   
app.use(express.static(path.resolve(__dirname, "./public")));  //sirviendo contenido estatico
app.use(express.urlencoded({ extended: false })); //
const puerto = 3000; //Webserver Port
app.listen(3000, () => {
    console.log(`Servidor Web corriendo en el puerto ${puerto}`);
})

//GET

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
app.get("/detalle", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/detalle.html"))
})

app.get("/template", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/template.html"))
})

app.get("/contacto", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"./views/contacto.html"))
})

app.get("/categoria", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"./views/categoria.html"))
})

app.get("/cafeteras", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"./views/cafeteras.html"))
})

app.get("/cafes", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"./views/cafes.html"))
})
app.get("/otrosProductos", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"./views/otrosProductos.html"))
})

app.get("/merchandising", (req, res) =>{
    res.sendFile(path.resolve(__dirname,"./views/merchandising.html"))
})

// POST

app.post("/registro", (req, res) =>{
    res.redirect("/")
    console.log(req.body)
})

app.post("/login", (req, res) =>{
    res.redirect("/")
    console.log(req.body)
})

app.post("/contacto", (req, res) =>{
    res.redirect("/")
    console.log(req.body)
})