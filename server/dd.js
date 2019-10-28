var db= require('mongoose');
var url= 'mongodb://localhost/ejemplo';
 db.set('useNewUrlParser', true);
 db.set('useFindAndModify',false);
 db.set('useUnifiedTopology', true);
db.connect(url,{ useFindAndModify: false }).then(data=>console.log('db conectada')).catch(err=>console.log(err));
db.connect(url,{useNewUrlParser: true}).then(data=>console.log('db conectada')).catch(err=>console.log(err));
