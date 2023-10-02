require('dotenv').config();
const axios = require('axios');
const { Product } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const getProducts = async () => {
    return "getProductsController";
};

module.exports = getProducts;