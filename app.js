var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');
var locals = require('./locals.js');
var tweetBank = require('./tweetBank');
var router = require('./routes.js');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

swig.setDefaults({ cache: false });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/', router);
app.use('static', express.static(__dirname + '/public'));

app.listen(3000,function(){
 console.log('Example app listening on port 3000!');
});
