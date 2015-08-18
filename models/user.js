"use strict";

module.exports = function (sequelize, DataType) {

	var User = sequelize.define('User', {
	  username : {
			type: DataType.STRING,
			unique : true,
			allowNull : false,
			validate : {
				notEmpty : true,
				len : [5,15]
			}
	  },
	  password : {
			type: DataType.STRING,
			allowNull : false,
			validate : {
				notEmpty : true,
				len : [6, 255]
			}
	  },
	  enabled : {
			type: DataType.BOOLEAN,
  		defaultValue : true
	  },
	  accountLocked : {
			type : DataType.BOOLEAN,
			defaultValue : false
	  },
	  passwordExpired : {
			type : DataType.BOOLEAN,
			defaultValue : false
	  }
	}, {
	  freezeTableName: true,
	  tableName: 'user',
		classMethods: {
			associate: function (models) {

				User.belongsTo(models.Avatar, {
					onDelete: 'CASCADE',
					foreignKey: 'avatar_id'
				});

				User.belongsTo(models.Person, {
					onDelete: 'CASCADE',
					foreignKey: 'person_id'
				});
			}
		},
	});

	return User;
};
