const { DataTypes: dtype, Sequelize } = require("sequelize");

module.exports = (database) => {
	database.define(
		"ShoppingCart",
		{
			quantity: {
				type: dtype.INTEGER
			}
		},
		{
			timestamps: false
		}
	);
};