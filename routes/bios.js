var express = require('express');
var router = express.Router();

//  Returns array.  Array holds multiple objects with out info
var bios = [
  {firstName: 'Barrett',
  lastName: 'Amsrud',
   bio: 'I like problem solving and I\'m excited to be here.',
   photo: 'assets/images/Barrett.jpg'},
   {firstName: 'Alex',
    lastName: 'Whitaker',
    bio: 'I like routers and long walks on the beach.',
    photo: 'assets/images/Alex.jpeg'},
    {firstName: 'Julie',
    lastName: 'S. Mike',
    bio: 'I like motorcyles and confusing coffee shop names.',
    photo: 'assets/images/Julie.jpeg'
  }
];

router.get('/', function(req, res){
  console.log('bios.js', bios );
  res.send(bios);
})

module.exports = router;
