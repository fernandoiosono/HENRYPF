require('dotenv').config();
const { Product } = require('../../database/database.js');

const { newProductDataIsValid,
    getNewIDProduct } = require('../../helpers');

const postProduct = async (newProduct) => {
    if (await newProductDataIsValid(newProduct)) {
        newProduct.idProduct = await getNewIDProduct();

        const productCreated = await Product.create(newProduct)

        return productCreated;
    }
};

module.exports = postProduct;