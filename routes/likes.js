var express = require('express');
var router = express.Router();


var likes ={
  Barrett: 0,
  Alex: 0,
  Julie: 0
}

router.get('/', function(req, res){
  console.log('likes.js', likes );
  res.send(likes);
})


router.post('/Barrett', function(req, res){
    likes.Barrett++;
    res.sendStatus(200);
})

router.post('/Alex', function(req, res){
    likes.Alex++;
    res.sendStatus(200);
})

router.post('/Julie', function(req, res){
    likes.Julie++;
    res.sendStatus(200);
})


module.exports = router;
