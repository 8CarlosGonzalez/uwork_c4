const Empleado = require("../models/empleados.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function(req, res){
  let empleado = new Empleado({
    nombre: req.body.nombre,
    p_apellido: req.body.p_apellido,
    s_apellido: req.body.s_apellido,
    telefono: req.body.telefono,
    mail: req.body.mail,
    direccion: req.body.direccion,
    profesion: req.body.profesion
  });

  empleado.save(function (err) {
    if (err) {
        console.log = false,
        response.exito = false,
        response.msg = "Error al guardar el empleado";
        res.json(response);
        return;
    }

    (response.exito = true),
      (response.msg = "El empleado se guardó correctamente");
    res.json(response);
  });
};

exports.find = function(req,res){
    Empleado.find(function(err, empleados){
        res.json(empleados)
    })
}

exports.findOne = function(req,res){
    Empleado.findOne({_id: req.params.id}, function(err, empleado){
        res.json(empleado)
    })
}

exports.update = function(req,res){
  let empleado = {
    nombre : req.body.nombre,
    p_apellido : req.body.p_apellido,
    s_apellido : req.body.s_apellido,
    telefono : req.body.telefono,
    mail: req.body.mail,
    direccion : req.body.direccion,
    profesion : req.body.profesion
  }

  Empleado.findByIdAndUpdate(req.params.id, {$set : empleado}, function(err){
    if(err){
      console.error(err),
      response.exito = false,
      response.msg = "Error al modificar el empleado"
      res.json(response)
      return;
    }
    response.exito = true,
    response.msg = "El empleado fue modificado correctamente"
    res.json(response)

  })
}

exports.remove = function(req, res){
  Empleado.findByIdAndRemove({_id: req.params.id}, function(err){
    if(err){
      console.error(err),
      response.exito = false,
      response.msg = "Error al eliminar el empleado"
      res.json(response)
      return;
    }
    response.exito = true,
    response.msg = "El empleado fue eliminado correctamente"
    res.json(response)
  })
}