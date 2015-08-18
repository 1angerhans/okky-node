"use strict";

module.exports = function(sequelize, DataType) {

  var Person = sequelize.define('Person', {

    fullName : {
      type: DataType.STRING,
			allowNull : false,
			validate : {
				notEmpty : true
			}
    },

    email : {
      type : DataType.STRING,
      unique : true,
			allowNull : false,
			validate : {
        isEmail : true,
				notEmpty : true
			}
    },

    dmAllowed : {
      type : DataType.BOOLEAN,
  		defaultValue : true
    }

  }, {
	  freezeTableName: true,
	  tableName: 'person'
	});


  return Person;

};
