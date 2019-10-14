var m = require('mongoose');
var { Schema } = m;

const squema = new Schema({
    name: {type:String, required:true},
    salary:{type:Number, required:true},
    status:{type:String, required:true}
}); 


module.exports= m.model('empleado',squema);
