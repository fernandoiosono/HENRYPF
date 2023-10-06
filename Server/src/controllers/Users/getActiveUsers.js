require('dotenv').config();
const { User } = require('../../database/database.js');

const getActiveUsers = async () => {
    const users = await User.findAll({
        where: {
            active: true
        }
    });

    if (!users.length) throw new Error("There's No Active Users in the Database!");

    return users;
};

module.exports = getActiveUsers;