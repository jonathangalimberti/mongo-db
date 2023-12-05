require("dotenv").config();
require("./config/database");

const express = require("express");

const app = express();

const PORT = 4000;

//Métodos

//seteamos el puerto de express

app.set("port", PORT);

//

app.get("/", (req, res) => {

    res.send("servidor creado");

})

app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto " + app.set("port"))
})