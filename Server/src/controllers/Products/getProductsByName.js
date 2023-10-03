require('dotenv').config();
const axios = require('axios');
const { Product } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const getProductsByName = async (name) => {

    const product = await Product.findOne({
        where: { name },
        attributes: ['name', 'description'],
    });
    
    if (product) {
        return product;
    } else {
    const { data } = await axios.get(LAPI_URL_PRODUCTS);
        return data.find((product) => product.name === name);
    }
};

module.exports = getProductsByName;