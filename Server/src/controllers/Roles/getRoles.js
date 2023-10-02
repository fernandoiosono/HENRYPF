require('dotenv').config();
const axios = require('axios');
const { Role } = require('../../database/database.js');

const { LAPI_URL_ROLES } = process.env;

const getRoles = async () => {
    return "getRolesController";
};

module.exports = getRoles;