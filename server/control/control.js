const e={};
const l={};
const empleado= require('../esquemas/schema');

e.getEmpleado= async (req, res)=>{
// mongo db documentacion {"filtro":valor del filtro}
   const emp= await empleado.find({"observacions.first": req.params.observacions});
   res.json(emp);
};
e.getEmpleados= async (req, res)=>{

  const emp= await empleado.find();
  res.json(emp);
};


 
e.Crear=async (req, res)=>{  
  const e=new empleado(req.body) 
  await e.save();
  
  console.log(req.body);
 res.json('ok');
  
};


e.getId = async (req,res)=>{
  const emp= await empleado.findById(req.params.id,(err,doc)=>{
    if(err){
      console.log('not ok');
    }
    console.log(doc);
  });
     res.json(emp); 
};
 
e.Editar= async (req, res) =>{
   //const {id } =req.params; // es lo mismo que (req.params.id) que esta en getId
   
 // const emp={observacions: {first: req.body.observacions.first,
   //                         second: req.body.observacions.second}
                 //
  //} ;
  const a={salary: req.body.salary }
   await empleado.updateOne(/*req.params.id*/ {"_id": req.params.id},{$set:a /*$inc:a,id,  $addToSet: emp*/ },{upsert:false},(err, doc)=>{// actualiza cualquier registro
    if(err){
      console.log('not ok');
    }else{
      
       console.log(empleado);
      console.log(doc); 
          }
  }); // buscar y si no lo encuentra que lo cree  
   // ojo pq si no el json te manda error cuando se inseta se coloca 'status': emp}
 
   res.json({status: 'ok'});}
 
 
e.Eliminar= async (req, res)=>{
await empleado.deleteOne({"_id":req.params.id});
res.json({status: ' delete ok'});

};
module.exports=e;
