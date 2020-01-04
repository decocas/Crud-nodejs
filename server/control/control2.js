const carro=require('../esquemas/Schema2');
const e={};

e.getCarros= async (req, res)=>{

    const car= await carro.find(/*{"_id": req.params.id}*/);
    res.json(car);
  };

  e.getCarros= async (req, res)=>{

    const car= await carro.findById(req.params.id,(err,doc)=>{
        if(err){
          console.log('not ok');
        }
        console.log(doc);
      });
    res.json(car);
  };
  
  e.PostCaro=async(req, res)=>{
    const l= new carro(req.body)
    await l.save();
    console.log(req.body);
    res.json('carro listo');
  };
  
  module.exports=e;