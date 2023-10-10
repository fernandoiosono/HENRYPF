const { DataTypes: dtype, Sequelize } = require("sequelize");

module.exports = (database) => {
	database.define(
		"Card",
		{
			idCard: {
				type: dtype.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			number: {
				type: dtype.STRING,
				allowNull: false,
				validate: {	len: [1, 20] }
			},
            expMonth: {
                type: dtype.STRING,
                allowNull: false,
				validate: {	len: [2, 2] }
            },
			expYear: {
                type: dtype.STRING,
                allowNull: false,
				validate: {	len: [2, 2] }
            },
            cvv: {
                type: dtype.STRING,
                allowNull: false,
                validate: { len: [4, 4] }
            }
		},
		{
			timestamps: false
		}
	);
};