const { DataTypes: dtype } = require("sequelize");

module.exports = (database) => {
	database.define(
		"Category",
		{
			idCategory: {
				type: dtype.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: dtype.STRING,
				allowNull: false,
				validate: {	len: [1, 50] }
			}
		},
		{
			timestamps: false
		}
	);
};