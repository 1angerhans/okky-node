var express = require('express');

var router = express.Router();

var model = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
});

router.post('/create', function(req, res, next) {

  var params = req.query;

  return model.sequelize.transaction(function (t) {

    var userPromise = model.User.create({
      username: params.username,
      password: params.password
    }, {
      transaction: t
    });

    userPromise.then(function(user) {

      var personPromise = model.Person.create({
        fullName: params.fullName,
        email : params.email,
        dmAllowed : params.dmAllowed === 'Y'
      }, {
        transaction: t
      });

      personPromise.then(function(person) {

        user.setPerson(person);

        var avatarPromise = model.Avatar.create({
          nickname: params.nickname,
          picture: '1.jpg'
        }, {
          transaction: t
        });

        avatarPromise.then(function(avatar) {
          user.setAvatar(avatar);
        });

        return avatarPromise;
      });

      return personPromise;

    });

    return userPromise;

    // // return Promise.all([userPromise, avatarPromise, personPromise]).then(function(instances) {
    //
    //   var user = instances[0];
    //   var avatar = instances[1];
    //   var person = instances[2];
    //   user.setPerson(person);
    //
    // });



  }).then(function() {

    res.json({success: true});

  }).catch(function(err) {
    console.log(err);
    res.status(500).json({status: false, errors: err.errors});
  });

});

router.get('/userFromAvatar/:avatarId', function(req, res, next) {
});

module.exports = router;
