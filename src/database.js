import mongoose from 'mongoose';
const URI = process.env.MONGODB_URI || "mongodb://localhost/test";

mongoose.Promise = global.Promise;
mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const conexion = mongoose.connection;

conexion.once("open", () => console.log("base de datos conectada en " + URI));