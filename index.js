require('dotenv').config({path: '.env'});
const app = require("./src/app");
require('./src/database');

const host = process.env.HOST || '0.0.0.0';

const main = async () => {
    await app.listen(app.get('port'), host);
    console.log("Servidor funcionando en el puerto:  " + app.get('port'));
};   

main();

