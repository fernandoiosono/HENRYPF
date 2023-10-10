const { Product } = require("../../database/database.js");

const getProductsOrderName = async (field, direction) => {
    let products;

    if (field === 'name' && (direction === 'asc' || direction === 'desc')) {
        products = await Product.findAll({
            order: [[field, direction]],
        });
    } else {
        return { error: 'Parámetros de orden no válidos' };
    }

    return products;
};

module.exports = getProductsOrderName;