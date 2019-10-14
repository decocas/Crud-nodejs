const e={};
const empleado= require('../esquemas/schema');
e.getEmpleado= async (req, res)=>{
   const emp= await empleado.find();
   res.json(emp);
};
e.Crear=  async (req, res)=>{
  const e=new empleado(req.body);
 await e.save();
 
 res.json('ok');
};
e.getId = async (req,res)=>{
  const emp= await empleado.findById(req.params.id);
     res.json(emp); 
};
e.Editar= async (req, res) =>{
  //const {id } =req.params; // es lo mismo que (req.params.id) que esta en getId
  const emp={name: req.body.name,
             salary: req.body.salary, 
             status: req.body.status 
  } ;
  const e= await empleado.findOneAndUpdate(req.params.id,{ $set: emp }, {new: true},(err, doc)=>{
    if(err){
      console.log('not ok');
    }
    console.log(doc);
    
  }); // buscar y si no lo encuentra que lo cree  
   // ojo pq si no el json te manda error cuando se inseta se coloca 'status': emp}
 
   res.json({status: 'ok'});}

e.Eliminar= async (req, res)=>{
await empleado.findOneAndDelete(req.params.id);
res.json({status: ' edelet ok'});

};
module.exports=e;
