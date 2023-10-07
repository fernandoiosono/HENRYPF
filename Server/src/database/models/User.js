const { DataTypes: dtype, Sequelize } = require("sequelize");

module.exports = (database) => {
	database.define(
		"User",
		{
			idUser: {
				type: dtype.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4
			},
			idAuth0: {
				type: dtype.STRING,
				allowNull: false
			},
			nickName: {
				type: dtype.STRING,
				allowNull: false,
				validate: { len: [1, 64] }
			}, 
			email: {
				type: dtype.TEXT,
				allowNull: false,
				validate: { len: [1, 320] }
			},
			imageURL: {
				type: dtype.TEXT,
				allowNull: false
			},
			active: {
				type: dtype.BOOLEAN,
				defaultValue: true
			},
			isAdmin: {
				type: dtype.BOOLEAN,
				defaultValue: false
			}
		},
		{
			timestamps: false,
		}
	);
};