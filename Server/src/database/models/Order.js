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
				allowNull: false
			},
			amount: {
				type: dtype.DECIMAL,
				allowNull: false
			},
			discountCode: {
				type: dtype.STRING,
				allowNull: true,
				validate: { len: [1, 50] }
			},
			date: {
				type: dtype.DATE,
				allowNull: false
			},
			deliveryDate: {
				type: dtype.DATE,
				allowNull: false
			}
		},
		{
			timestamps: false,
		}
	);
};