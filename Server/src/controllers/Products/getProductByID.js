require('dotenv').config();
const axios = require('axios');
const { Product } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const getProductByID = async (id) => {
    const product = await Product.findOne({ 
        where: { idProduct: id } 
    });

    if (!product) throw new Error("The Product with the ID Entered Doesn't Exist");

    return product;
};

module.exports = getProductByID;