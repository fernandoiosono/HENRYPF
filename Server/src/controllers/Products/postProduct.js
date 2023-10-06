require('dotenv').config();
const { Product } = require('../../database/database.js');

const { newProductDataIsValid,
    getNewIDProduct } = require('../../helpers');

const postProduct = async (newProduct) => {
    if (await newProductDataIsValid(newProduct)) {
        const productCreated = await Product.create(newProduct)

        return productCreated;
    }
};

module.exports = postProduct;