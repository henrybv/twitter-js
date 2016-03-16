var express = require('express');
var tweetBank = require('./tweetBank');
var router = express.Router();

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});

router.get('/stylesheets/style.css', function (req, res) {
  console.log("hey");
  res.sendFile(__dirname + '/public/stylesheets/style.css');
});

module.exports = router;

// app.use('/',function(req,res,next) {
//   console.log('reached use');
//   next();
// });

// app.use('/special',function(req,res,next) {
//   console.log("reached special!")
//   next();
// });

// app.get('/',function(req,res) {
//   res.render('index.html',locals['locals']);
// });
// // swig.renderFile(__dirname + '/views/index.html', locals, function (err, output) {
// //     console.log(output);
// // });

// app.get('/news',function(req,res) {
//   res.send('Ready for Hillary');
// });
