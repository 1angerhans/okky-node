var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  req.models.user.find({username: 'langerhans'}, function(err, users) {
      if (err) throw err;

      console.log(users);

      res.json(users);
  });

});

module.exports = router;
