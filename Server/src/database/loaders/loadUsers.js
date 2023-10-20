require('dotenv').config();
const axios = require('axios');
const { User } = require('../database.js');

const { LAPI_URL_USERS } = process.env;

const loadUsers = async () => {
    const usersDB = await User.findOne();

    if (!usersDB) {
        const { data } = await axios.get(LAPI_URL_USERS);

        await User.bulkCreate(data);

        console.log('User model Filled from Local API on Port 5000');
    }
};

module.exports = loadUsers;