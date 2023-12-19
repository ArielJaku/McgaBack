import express from 'express';
const mongoose = require('mongoose');
const verdurasRoutes = require('./rutas/rutasVerdura')

const app = express();

//conectar to mongo db
const dbURI = 'mongodb+srv://ArielMon:Usuario123@cluster0.k3fgvjm.mongodb.net/note-tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI,{ useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>app.listen(3000))
.catch((error : any)=>console.log(error))

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    const validar : string = 'true'
    res.setHeader('Access-Control-Allow-Credentials', validar);
    next();
});

app.use(express.json())
app.use('/', verdurasRoutes);

app.use((req,res)=>{
    res.status(404)
});