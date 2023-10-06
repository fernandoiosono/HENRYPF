require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const patchCard = async (newData) => {
    return newData;
};

module.exports = patchCard;