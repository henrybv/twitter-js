var express = require('express');
var morgan = require('morgan');
var swig = require('swig');
var locals = require('./locals.js');
var tweetBank = require('./tweetBank');
var router = require('./routes.js');

var app = express();

swig.setDefaults({ cache: false });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/', router);

app.listen(3000,function(){
 console.log('Example app listening on port 3000!');
});