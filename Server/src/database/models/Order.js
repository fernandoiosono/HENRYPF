const { DataTypes: dtype, Sequelize } = require("sequelize");

module.exports = (database) => {
	database.define(
		"Order",
		{
			idOrder: {
				type: dtype.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			address: {
				type: dtype.STRING,
				allowNull: true
			},
			postalCode: {
				type: dtype.STRING,
				allowNull: true
			},
			phone: {
				type: dtype.STRING,
				allowNull: true
			},
			amount: {
				type: dtype.DECIMAL,
				allowNull: false,
				defaultValue: 0
			},
			paymentDate: {
				type: dtype.DATE,
				allowNull: true
			},
			deliveredDate: {
				type: dtype.DATE,
				allowNull: true
			},
			receivedDate: {
				type: dtype.DATE,
				allowNull: true
			},
			status: {
				type: dtype.STRING,
				allowNull: false,
				defaultValue: "STAGED"
			}
		},
		{
			timestamps: false,
		}
	);
};