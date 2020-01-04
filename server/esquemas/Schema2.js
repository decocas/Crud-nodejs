var m = require('mongoose');
var { Schema } = m;

const s = new Schema({
    modelo: {type:String, required:false},
    marca:{type:String, required:false},
    placa:{type:String, required:false},
     
}); 
 

 
module.exports= m.model('carro', s);