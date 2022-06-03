'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();


//llamando cors
app.use(cors());

//cargar rutas
let user_routes = require('./routes/user');
let phone_routes = require('./routes/phone');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cabecera cors
app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Methods: POST, PUT, GET, OPTIONS')
    res.header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next();
});


//rutas base
app.use('/api', user_routes);
app.use('/api', phone_routes);

module.exports=app;
