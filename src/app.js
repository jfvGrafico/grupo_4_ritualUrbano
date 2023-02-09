//requires

const express = require("express"); 
const path = require("path");    
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const mainRoute = require("./routes/mainRoute");  
const userRoute = require("./routes/userRoute");  
const productoRoute = require ("./routes/productoRoute");   
const carritoRoute = require("./routes/carritoRoute"); 


const userAuthMiddleware = require("./middleware/userAuthMiddleware");
const carritoPreviewMiddleware = require("./middleware/carritoPreviewMiddleware");
const apiProductoRoute = require ("./routes/api/productoRouter");
const apiUsersRoute =require("./routes/api/usersApiRouter");
const app = express();
const cors = require('cors');

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
app.use(cors());

//servidor web
const puerto = "3001"; 
app.listen(puerto, () => {
    console.log(`Servidor Web corriendo en el puerto ${puerto}`);
})

 
//rutas

app.use("/producto/carrito", carritoRoute)
app.use("/", mainRoute)
app.use("/user", userRoute)
app.use("/producto", productoRoute)


//Aquí creo la colección de mis recursos de movies (APIs)
app.use("/api/products",apiProductoRoute);
app.use("/api/users", apiUsersRoute);




//404 redirect

app.use((req, res, next) => {
  res.status(404).render("not-found");            
  next()
});

module.exports = app;