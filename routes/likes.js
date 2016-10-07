var express = require('express');
var router = express.Router();

//  Establish the starting likes for each person
var likes = {
  Barrett: 0,
  Alex: 0,
  Julie: 0
};

//  Sends the likes to others
router.get('/', function(req, res){
  console.log('likes.js', likes );
  res.send(likes);
})

//  Add a like to Barrett, and send a positive response
router.post('/Barrett', function(req, res){
    likes.Barrett++;
    res.sendStatus(200);
})

//  Add a like to Alex, and send a positive response
router.post('/Alex', function(req, res){
    likes.Alex++;
    res.sendStatus(200);
})

//  Add a like to Julie, and send a positive response
router.post('/Julie', function(req, res){
    likes.Julie++;
    res.sendStatus(200);
})

//  Export the router to app.js
module.exports = router;
