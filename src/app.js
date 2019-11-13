import express from "express";
const app = express();
import morgan from "morgan";
import path from "path";
import cors from 'cors';
import bodyParser from 'body-parser';

//configuracion de puerto
app.set("port", process.env.PORT || 4000);

//config
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//middlewares
app.use(bodyParser.json());
app.use(cors())

//rutas
app.use('/api/usuarios', require('./routes/usuariosRoute'));

module.exports = app;