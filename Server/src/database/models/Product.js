const { DataTypes: dtype, Sequelize } = require("sequelize");

module.exports = (database) => {
	database.define(
		"Product",
		{
			idProduct: {
				type: dtype.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			name: {
				type: dtype.STRING,
				allowNull: false
			},
			imageURL: {
				type: dtype.TEXT,
				allowNull: false
			},
			description: {
				type: dtype.TEXT,
				allowNull: false
			},
			price: {
				type: dtype.INTEGER,
				allowNull: false
			},
			stock: {
				type: dtype.INTEGER,
				defaultValue: 0
			},
			discount: {
				type: dtype.INTEGER,
				defaultValue: 0
			},
			active: {
				type: dtype.BOOLEAN,
				defaultValue: true
            }
		},
		{
			timestamps: false
		}
	);
};