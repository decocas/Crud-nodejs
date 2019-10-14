var express= require('express');
var r=express.Router();
var ctrl=require('../server/control/control');

r.get('/', ctrl.getEmpleado);
r.post('/', ctrl.Crear);
r.get('/:id', ctrl.getId);
r.put('/:id', ctrl.Editar);
r.delete('/:id', ctrl.Eliminar);
module.exports=r;