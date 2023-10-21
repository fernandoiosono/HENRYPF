const { Product } = require('../../database/database.js');

const getNewIDProduct = async () => {
    const lastProduct = await Product.findOne({
        order: [['idProduct', 'DESC']]
    });

    const newIDProduct = lastProduct.idProduct + 1;

    return newIDProduct;
};

module.exports = getNewIDProduct;