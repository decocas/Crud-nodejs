var express= require('express');
var r=express.Router();
var ctrl=require('../server/control/control2');

r.get('/:id', ctrl.getCarros);
r.post('/',ctrl.PostCaro );

module.exports=r;