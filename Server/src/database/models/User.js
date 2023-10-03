const { DataTypes: dtype } = require("sequelize");

module.exports = (database) => {
	database.define(
		"User",
		{
			idUser: {
				type: dtype.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: dtype.STRING,
				allowNull: false,
				validate: { len: [1, 100] }
			},
			lastname: {
				type: dtype.STRING,
				allowNull: false,
				validate: { len: [1, 100] }
			},
			email: {
				type: dtype.TEXT,
				allowNull: false,
				validate: { len: [1, 320] }
			},
			password: {
				type: dtype.STRING,
				allowNull: false,
				validate: { len: [1, 20] }
			},
			imageURL: {
				type: dtype.TEXT,
				allowNull: false
			},
			active: {
				type: dtype.BOOLEAN,
				default: true
			}
		},
		{
			timestamps: false,
		}
	);
};