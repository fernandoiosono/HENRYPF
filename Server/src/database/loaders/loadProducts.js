require('dotenv').config();
const axios = require('axios');
const { Product } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const loadProducts = async () => {
    const productsDB = await Product.findOne();

    if (!productsDB) {
        const { data } = await axios.get(LAPI_URL_PRODUCTS);

        await Product.bulkCreate(data);

        console.log('Product model Filled from Local API on Port 5000');
    }
};

module.exports = loadProducts;