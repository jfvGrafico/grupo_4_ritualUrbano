//requires

const express = require("express"); 
const path = require("path");    
const mainRoute = require("./routes/mainRoute")  
const userRoute = require("./routes/userRoute")  
const productoRoute = require ("./routes/productoRoute")   
const carritoRoute = require("./routes/carritoRoute") 
const methodOverride = require("method-override");
const session = require("express-session")
const cookieParser = require("cookie-parser")
const userAuthMiddleware = require("./middleware/userAuthMiddleware")
const carritoPreviewMiddleware = require("./middleware/carritoPreviewMiddleware")
const app = express();

//middlewares

app.use(express.static(path.resolve(__dirname, "../public")));  //sirviendo contenido estatico
app.use(express.urlencoded({ extended: false })); // captura objetos en el body del res.
app.use(express.json()) // permite manipular json
app.use(methodOverride("_method")) //netodo para put y delete
app.use(session ({secret : "Ritual Urbano, el mejor cafe!",
                  resave : false, 
                  saveUninitialized : false}))
app.use(cookieParser())
app.use(userAuthMiddleware)
app.use(carritoPreviewMiddleware)
                  
app.set("view engine", "ejs")
app.set("views", path.join(__dirname , "/views"))

//servidor web
const puerto = 3000; 
app.listen(puerto, () => {
    console.log(`Servidor Web corriendo en el puerto ${puerto}`);
})

 
//rutas

app.use("/", mainRoute)
app.use("/user", userRoute)
app.use("/producto/carrito", carritoRoute)
app.use("/producto", productoRoute)




//404 redirect

app.use((req, res, next) => {
  res.status(404).render("not-found");            
  next()
});
