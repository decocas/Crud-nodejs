var m = require('mongoose');
var { Schema } = m;

const squema = new Schema({
    name: {type:String, required:false},
    salary:{type:Number, required:false},
    status:{type:String, required:false},
    observacions:[{first:{type:String},second:{type:Number},required:false }]
}); 
const s = new Schema({observacions:[{first:{type:String},second:{type:Number},required:false }]});

 
module.exports= m.model('empleado', squema );
//module.exports= m.model('salida',s);
