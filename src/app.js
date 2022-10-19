const express = require("express"); 
const path = require("path");    
const mainRoute = require("./routes/mainRoute")  
const userRoute = require("./routes/userRoute")  
const productoRoute = require ("./routes/productoRoute")      
const methodOverride = require("method-override");
const router = require("./routes/mainRoute");
const session = require("express-session")
const app = express();                   
app.use(express.static(path.resolve(__dirname, "../public")));  //sirviendo contenido estatico
app.use(express.urlencoded({ extended: false })); // captura objetos en el body del res.
app.use(express.json()) // permite manipular json
app.use(methodOverride("_method")) //netodo para put y delete
app.use(session ({secret : "Ritual Urbano, el mejor cafe!"}))
app.set("view engine", "ejs")
app.set("views", path.join(__dirname , "/views"))
const puerto = 3000; //Webserver Port
app.listen(puerto, () => {
    console.log(`Servidor Web corriendo en el puerto ${puerto}`);
})

 /*app.use((req, res, next) => {
  res.status(404).render("not-found");            //redireciona a 404.
  next()
});
*/

app.use("/", mainRoute)
app.use("/user", userRoute)
app.use("/producto", productoRoute)

