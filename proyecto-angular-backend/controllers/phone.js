'use strict'

// modulos
let fs  = require('fs');//libreria para trabajar con sistema de ficheros
let path = require('path');



//modelos
let User = require('../models/user');
let Phone = require('../models/phone');

//Servicio jwt
let jwt = require("../services/jwt");
const phone = require('../models/phone');


//acciones
function pruebas(req,res){
  res.status(200).send({
    message: 'Probando el controlador de telefonos y la acción pruebas',
      user: req.user
  });
}

function savePhone(req,res){

  let phone = new Phone();
  let params = req.body;

  if(params.name){
    phone.name = params.name;
    phone.description = params.description;
    phone.year = params.year;
    phone.image = null;
    phone.user = req.user.sub;

    phone.save((err,phoneStored) => {
      if(err){
        res.status(500).send({message: 'Error en el servidor'})
      }else {
        if(!phoneStored){
          res.status(404).send({message: 'No se ha guardado el cel'});
        }else {
          res.status(200).send({phoneStored});
        }
      }
    });
  }else{
    res.status(200).send({
      message: 'El modelo del celular es obligatorio'
    });
  }
}

function getPhones(req, res){
  Phone.find({}).populate({path: 'user'}).exec((err, phones) =>{
    if(err){
      res.status(500).send({
        message: 'Error en la peticion'
      });
    }else{
      if(!phones){
        res.status(404).send({
          message: 'No hay celulares'
        });
      }else{
        res.status(200).send({
          message: phones
        });
      }
    }
  });
}

function getPhone(req,res){
  let phoneId = req.params.id;

  Phone.findById(phoneId).populate({path:'user'}).exec((err, phone)=>{
    if(err){
      res.status(500).send({
        message: 'Error en la peticion'
      });
    }else{
      if(!phone){
        res.status(404).send({
          message: 'El telefono no existe'
        });
      }else{
        res.status(200).send({
          telefono: phone
        });
      }
    }
  });
}

function updatePhone(req,res){
  let phoneId = req.params.id;
  let update = req.body;

  Phone.findByIdAndUpdate(phoneId, update, {new:true}, (err,phoneUpdated)=>{
    if(err){
      res.status(500).send({
        message: 'Error en la peticion'
      });
    }else{
      if(!phoneUpdated){
        res.status(404).send({
          message: 'No se ha actualizado el animal'
        });
      }else{
        res.status(200).send({
          telefono: phoneUpdated
        });
      }
    }
  });
}

function uploadImage(req, res){
  let phoneId = req.params.id;
  let file_name = 'No subido...';

  if(req.files){
    let file_path = req.files.image.path;
    let file_split = file_path.split('\\');
    let file_name = file_split[2];

    let ext_split = file_name.split('\.');
    let file_ext = ext_split[1];
    let file_ext1 = ext_split[2];
    let file_ext2 = ext_split[3];
    let file_ext3 = ext_split[4];

    if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
        
        Phone.findByIdAndUpdate( phoneId, {image: file_name, }, {new:true}, (err, phoneUpdated) => {
          if(err){
            res.status(500).send({
              menssage: "Error al actualizar el usuario : "+err
              });
          }else{
              if(!phoneUpdated){
                  res.status(404).send({message: 'No se ha podido actualizar el celular'});
          }else{
               res.status(200).send({phone: phoneUpdated, image: file_name});
            }
          }
      });

    }else{
        fs.unlink(file_path,(err)=>{
          if(err){
            res.status(200).send({message: 'Extension no valida y fichero no borrado'});
          }else{
            res.status(200).send({message: 'Extension no valida'});
          }
        });
    }
  }else{
    res.status(200).send({message: 'No se ha subido archivos'});
  }
}

function getImageFile(req, res) {
  let imageFile = req.params.imageFile;
  const pathFile = `./uploads/phones/${imageFile}`;
  fs.exists(pathFile, (exists) => {
      if (exists) {
          res.sendFile(path.resolve(pathFile));
      } else {
          res.status(404).send({message: 'No existe la imagen...'});
      }
  })
}

function deletePhone(req,res){
  let phoneId = req.params.id;

  Phone.findByIdAndRemove(phoneId,(err, phoneRemoved)=>{
    if(err){
      res.status(500).send({message: 'Error en la peticion'});
    }else{
      if(! phoneRemoved){
        res.status(404).send({message: 'No se ha podido borrar el celular'});
      }else{
        res.status(200).send({telefono: phoneRemoved});
      }
    }


  });

}

module.exports = {
  pruebas,
  savePhone,
  getPhones,
  getPhone,
  updatePhone,
  uploadImage,
  getImageFile,
  deletePhone
}