// middleware order
// app.set
//* Templating boilerplate setup. res.render('something') swig.renderFile
// working w/ libraries. scotch.io
// x.on('something',function(){}) ==> event-handler ==> event-emitter exerise (Foundations)
// websockets

var express = require('express');
var app = express();
var morgan = require('morgan');

var logger = morgan('dev');
app.use(logger); // or 1-liner: app.use(morgan('dev'));
// logger = function(req,res,next){}

// // value of express: middleware chain.
// // this is doing what 'morgan' is
// app.use(function(req,res,next){
//   // console.log('requested:', req.method, req.path);
//   res.on('finish',function(){
//     console.log(req.method, req.path, res.statusCode);
//   })
//   next(); // moving on to another middleware function.
// });

app.get('/', function(req,res) {
  res.send('you got the root route');
});


app.get('/news', function(req,res,next) {
  res.json({name: 'newsRoute', data: 12345});
  next(); // have to call next() to get to middleware function below!
});

// this is pooled together w/ app.use, which is replaced by 'morgan'
// app.use(function(req,res){
//   console.log('response:', res.statusCode); // execute bcause of next()
// });


app.listen(1337, function(){
  console.log('we are listening on 1337');
});

// var server = http.createServer(function(req,res) {
//   console.log('made a request');
//   res.writeHead(200, {'content-type': 'text/plain'});
//   res.write('here is some plain text');
//   res.end();
// });

// server.listen(1337, function(){
//   console.log('we are listening on 1337');
// });
