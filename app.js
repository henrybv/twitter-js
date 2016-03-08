var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');
var locals = require('./locals.js');
var tweetBank = require('./tweetBank');
var router = require('./routes.js');
var socketio = require('socket.io');

var app = express();

app.use( '/', router(io));
// or:
// var router = router(io);
// app.use( '/', router );

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

swig.setDefaults({ cache: false });

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/', router);
app.use('static', express.static(__dirname + '/public'));



var server = app.listen(3000);
var io = socketio.listen(server);