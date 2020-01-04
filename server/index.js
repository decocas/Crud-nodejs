var expre= require('express'); //variable para iniciar servicio express
var app=expre(); // variable que ejecutara la comunicacion con express
const {db}= require('./dd');
var cors= require('cors');
app.listen(4000, ()=> {
    console.log('listen hear ')
});
/*
app.get('/', (req,res)=>{
    res.send('aqui voy yo')
});*/
app.use(cors());
app.use(expre.json()); 
app.use('/index',require('../ruta/ruta'));
app.use('/index/carro',require('../ruta/ruta2'));
 