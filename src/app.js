import express from "express";
import morgan from "morgan";
import path from "path";
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

//configuracion de puerto
app.set("port", process.env.PORT || 4000);

//config
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use(bodyParser.json());
app.use(cors())

//rutas
app.get('/', (req, res) => {
    res.send("hola");
})

module.exports = app;