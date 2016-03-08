var express = require('express');
var app = express();

app.use('/',function(req,res,next) {
  console.log('reached use');
  next();
});

app.use('/special',function(req,res,next) {
  console.log("reached special!")
  next();
});

app.get('/',function(req,res) {
  res.send('Server listening');
});

app.get('/news',function(req,res) {
  res.send('Ready for Hillary');
});

app.listen(3000,function(){
 console.log('Example app listening on port 3000!');
});