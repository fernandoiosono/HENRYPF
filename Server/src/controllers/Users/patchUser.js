require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const patchUser = async (newData) => {
    return newData;
};

module.exports = patchUser;