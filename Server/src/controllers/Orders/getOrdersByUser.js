require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const getOrdersByUser = async (idUser) => {
    return idUser;
};

module.exports = getOrdersByUser;