require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const getRoles = async () => {
    return "getRolesController";
};

module.exports = getRoles;