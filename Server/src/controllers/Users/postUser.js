require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const postUser = async (newUser) => {
    return newUser;
};

module.exports = postUser;