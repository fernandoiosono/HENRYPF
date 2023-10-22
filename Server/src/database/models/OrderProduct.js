const { DataTypes: dtype } = require("sequelize");

module.exports = (database) => {
	database.define(
		"OrderProduct",
		{
			idOrder: {
				type: dtype.UUID,
				primaryKey: true
			},
			idProduct: {
				type: dtype.UUID,
				primaryKey: true
			},
			quantity: {
				type: dtype.INTEGER
			}
		},
		{
			timestamps: false
		}
	);
};