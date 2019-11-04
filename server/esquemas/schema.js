var m = require('mongoose');
var { Schema } = m;

const squema = new Schema({
    name: {type:String, required:true},
    salary:{type:Number, required:true},
    status:{type:String, required:true},
    observacions:{first:{type:String},second:{type:Number},required:false }
}); 


module.exports= m.model('empleado',squema);
