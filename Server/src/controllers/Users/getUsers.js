require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const getUsers = async () => {
    
    const users = await User.findAll();
    if(users) return users;
    else throw new Error(`Error en la solicitud a la base de dato: ${error.message}`);
};

module.exports = getUsers;