import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req,res)=>{
//     res.render('index')
// })

app.listen(app.get('port'), ()=>{
    console.log('Escuchando en el puerto' + app.get('port'))   
})