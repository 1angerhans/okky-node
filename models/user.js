
var orm = require('orm');

module.exports = function(db) {
  var User = db.define("user", {
    username: String,
    fullName: String,
    password: String
  }, {
    validations: {
      username: orm.enforce.required("Required.")
    }
  });

  db.sync(function(err) {
      if (err) throw err;

      User.exists({username: 'langerhans'},function(err, exists) {
        if(!exists) {
          User.create({username: 'langerhans', fullName: 'btj', password: '1234'}, function(err) {
              if (err) throw err;
          });
        }
      });
  });

  return User;
};
