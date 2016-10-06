var express = require('express');
var router = express.Router();

//  Array holding first name, last name, biography, and photo url.
var bios = [
  { firstName: 'Barrett',
    lastName: 'Amsrud',
    bio: 'I like problem solving and I\'m excited to be here.',
    photo: 'assets/images/Barrett.jpeg'},
  { firstName: 'Alex',
    lastName: 'Whitaker',
    bio: 'I like routers and long walks on the beach.',
    photo: 'assets/images/Alex.jpeg'},
  { firstName: 'Julie',
    lastName: 'S. Mike',
    bio: 'I like motorcyles and confusing coffee shop names.',
    photo: 'assets/images/Julie.jpeg'}
];

//  Sends the bio information
router.get('/', function(req, res){
  console.log('bios.js', bios );
  res.send(bios);
})

//  Exports the router for use in app.js
module.exports = router;
