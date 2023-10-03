const { DataTypes: dtype } = require("sequelize");

module.exports = (database) => {
	database.define(
		"Card",
		{
			idCard: {
				type: dtype.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			number: {
				type: dtype.STRING,
				allowNull: false,
				validate: {	len: [1, 20] }
			},
            expDate: {
                type: dtype.DATE,
                allowNull: false
            },
            cvc: {
                type: dtype.STRING,
                allowNull: false,
                validate: { len: [3, 3] }
            }
		},
		{
			timestamps: false
		}
	);
};