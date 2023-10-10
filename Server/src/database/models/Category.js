const { DataTypes: dtype, Sequelize } = require("sequelize");

module.exports = (database) => {
	database.define(
		"Category",
		{
			idCategory: {
				type: dtype.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
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