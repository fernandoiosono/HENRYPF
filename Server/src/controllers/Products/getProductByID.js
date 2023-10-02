require('dotenv').config();
const axios = require('axios');
const { Product } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const getProductByID = async () => {
    return "getProductByIDController";
};

module.exports = getProductByID;