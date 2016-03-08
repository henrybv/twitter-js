var express = require('express');
var tweetBank = require('./tweetBank');
var bodyParser = require('body-parser');
var router = express.Router(); // built-in Express method



router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render('index', { title: 'Twitter.js', tweets: tweets, showForm: true} );
});

router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile(__dirname + '/public/stylesheets/style.css');
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find({name: name});
  res.render('index', { title: 'Twitter.js', tweets: tweets} );
});

router.post('/tweets', function(req, res) {
  console.log(req.body);
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});



module.exports = function (io) {
  module.exports = router;
  // ...
  // route definitions, etc.
  // ...
  return router;
};





// to practice expressJS methods :

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