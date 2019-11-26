var express= require('express');
var r=express.Router();
var ctrl=require('../server/control/control');
r.get('/', ctrl.getEmpleados);
 
r.post('/', ctrl.Crear);
r.get('/:id', ctrl.getId);
r.put('/:id', ctrl.Editar);
r.delete('/:id', ctrl.Eliminar);
r.get('/:observacions', ctrl.getEmpleado);
module.exports=r;