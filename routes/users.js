var express = require('express');
var router = express.Router();

var model = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.User.findAll().then(function(users) {
    res.json(users);
  });
});

router.get('/create', function(req, res, next) {
  
  model.User.create({
    username: 'langerhans',
    password: '12345678' 
  }).then(function(user) {
    
    model.Avatar.create({
      nickname: '랑겔한스',
      picture: 'none'
    }).then(function(avatar) {
      
      avatar.setUser(user);
      
      res.json(avatar);
      
    });
    
  });
  
});



router.get('/userFromAvatar/:avatarId', function(req, res, next) {
  
  model.Avatar.findById(req.params.avatarId).then(function(avatar){
    avatar.getUser().then(function(user) {
      res.json(user);
    });
    
  });
  
});

module.exports = router;
