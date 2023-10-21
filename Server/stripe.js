require('dotenv').config();

const { SECRET_KEY } = process.env;

const stripeAPI = require ('stripe')(SECRET_KEY);

module.exports = stripeAPI;