var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//  Routers
var biosRouter = require('./routes/bios');
var likesRouter = require('./routes/likes');

var app = express();

//  Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

//  Using the routers
app.use('/bios', biosRouter);
app.use('/likes', likesRouter);

//  Connecting to index.html
app.get('/', function(req, res){
  var filename = path.join(__dirname, 'public/views/index.html');
  res.sendFile(filename);
});

//  Sets the project to localhost:3000
app.listen(3000);
