'use strict'

let express = require('express');
let UserController = require('../controllers/user');

let api = express.Router();
let md_auth = require('../middlewares/authenticated');

let multipart = require('connect-multiparty');
let md_upload = multipart({uploadDir: './uploads/users'});

api.get('/pruebas-del-controlador', md_auth.ensureAuth, UserController.pruebas);
api.post('/register', UserController.saveUser);
api.post('/login', UserController.login);
api.put('/update-user/:id', md_auth.ensureAuth, UserController.updateUser);
api.post('/upload-image-user/:id', [md_auth.ensureAuth, md_upload], UserController.uploadImage);
api.get('/get-image-file/:imageFile',UserController.getImageFile);
api.get('/admins',UserController.getAdmins);



module.exports = api;