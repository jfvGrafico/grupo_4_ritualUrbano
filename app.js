const express = require("express"); 
const path = require("path");    
const mainRoute = require("./routes/mainRoute")  
const userRoute = require("./routes/userRoute")  
const productoRoute = require ("./routes/productoRoute")      
const app = express();                   
app.use(express.static(path.resolve(__dirname, "./public")));  //sirviendo contenido estatico
app.use(express.urlencoded({ extended: false })); //
const puerto = 3000; //Webserver Port
app.listen(3000, () => {
    console.log(`Servidor Web corriendo en el puerto ${puerto}`);
})

//GET

app.use("/", mainRoute)
app.use("/user", userRoute)
app.use("/producto", productoRoute)
