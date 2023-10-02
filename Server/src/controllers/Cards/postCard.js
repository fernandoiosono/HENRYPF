require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const postCard = async (newCard) => {
    return newCard;
};

module.exports = postCard;