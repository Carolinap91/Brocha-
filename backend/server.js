// ejecutar npm install antes de correr el proyecto backend

const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/graff", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Se conectó correctamente a la bd"))
.catch(err => {
    console.log("Hubo un error al conectarse a la bd")
    console.log(err)
});

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const usuariosRoutes = require("./routes/users.routes");
usuariosRoutes(app);
const server = app.listen(8080, () => 
console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

