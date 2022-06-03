'use strict'

let express = require('express');
let PhoneController = require('../controllers/phone');

let api = express.Router();;
let md_auth = require('../middlewares/authenticated');
let md_admin = require('../middlewares/is_admin');

let multipart = require('connect-multiparty');
let md_upload = multipart({uploadDir: './uploads/phones'});

api.get('/pruebas_phone', md_auth.ensureAuth, PhoneController.pruebas);
api.post('/phone', [md_auth.ensureAuth, md_admin.isAdmin], PhoneController.savePhone); //ruta privada
api.get('/phones', PhoneController.getPhones);
api.get('/phone/:id', PhoneController.getPhone);
api.put('/phone/:id', md_auth.ensureAuth, PhoneController.updatePhone);// ruta privada
api.post('/upload-image-phone/:id', [md_auth.ensureAuth, md_upload], PhoneController.uploadImage);//ruta privada
api.get('/get-image-phone/:imageFile',PhoneController.getImageFile);
api.delete('/phone/:id', md_auth.ensureAuth, PhoneController.deletePhone);//ruta privada

module.exports = api;