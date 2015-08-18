"use strict";

module.exports = function(sequelize, DataType) {

	var Avatar = sequelize.define('Avatar', {

		nickname : {
			type: DataType.STRING,
			allowNull: false,
			unique: true,
			validate: {
				notEmpty : true
			}
		},

		picture : {
			type: DataType.STRING
		}

	},{
	  freezeTableName: true,
	  tableName: 'avatar'
	});

	return Avatar;
};
