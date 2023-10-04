require('dotenv').config();
const { Product } = require('../../database/database.js');
const newProductDataIsValid = require('../../helpers/newProductDataIsValid.js')

const postProduct = async (newProduct) => {
    if (await newProductDataIsValid(newProduct)) {
        const lastProduct = await Product.findOne({
            order: [['idProduct', 'DESC']]
        });

        const idProduct = lastProduct.idProduct + 1;

        newProduct.idProduct = idProduct;

        const productCreated = await Product.create(newProduct)

        return productCreated;
    }
};

module.exports = postProduct;