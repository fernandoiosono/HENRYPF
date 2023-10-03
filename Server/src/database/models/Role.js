const { DataTypes: dtype } = require("sequelize");

module.exports = (database) => {
	database.define(
		"Role",
		{
			idRole: {
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