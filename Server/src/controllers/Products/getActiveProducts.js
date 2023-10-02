require('dotenv').config();
const axios = require('axios');
const { Product } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const getActiveProducts = async () => {
    return "getActiveProductsController";
};

module.exports = getActiveProducts;