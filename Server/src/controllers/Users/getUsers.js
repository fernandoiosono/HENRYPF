require('dotenv').config();
const { User } = require('../../database/database.js');

const getUsers = async () => {
    const users = await User.findAll();

    if (!users.length) throw new Error("There's No Users in the Database!");

    return users;
};

module.exports = getUsers;