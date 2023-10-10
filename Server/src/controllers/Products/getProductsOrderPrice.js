const { Product } = require("../../database/database.js");

const getProductsOrderPrice = async (price) => {
    let products;

    if (price === 'asc') {
        products = await Product.findAll({
            order: [['price', 'ASC']],
        });
    } else if (price === 'desc') {
        products = await Product.findAll({
            order: [['price', 'DESC']],
        });
    } else {
        return { error: 'Invalid price value' };
    }

    return products;
};

module.exports = getProductsOrderPrice;