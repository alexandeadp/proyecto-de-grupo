import mongoose from 'mongoose';
const URI = 'mongodb://localhost:27017/emprende_aprende_db';

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const conexion = mongoose.connection;

conexion.once('open', () => console.log("base de datos conectada"));