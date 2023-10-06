require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const getUserAccess = async (email, password) => {
    return true;
};

module.exports = getUserAccess;