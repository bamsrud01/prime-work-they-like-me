var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var biosRouter = require('./routes/bios');
var likesRouter = require('./routes/likes');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/bios', biosRouter);
app.use('/likes', likesRouter);

app.get('/', function(req, res){
  var filename = path.join(__dirname, 'public/views/index.html');

  res.sendFile(filename);
});

app.listen(3000);
