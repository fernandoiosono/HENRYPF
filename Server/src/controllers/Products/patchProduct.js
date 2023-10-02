require('dotenv').config();
const axios = require('axios');
const { Product } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const patchProduct = async () => {
    return "patchProductController";
};

module.exports = patchProduct;