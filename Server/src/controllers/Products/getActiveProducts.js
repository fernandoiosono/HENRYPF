require('dotenv').config();
const { Product, Category } = require('../../database/database.js');

const getActiveProducts = async () => {
    const products = await Product.findAll({
        where: {
            active: true
        },
        attributes: {
            exclude: 'CategoryIdCategory'
        },
        include: {
            model: Category,
            attributes: [ 'idCategory', 'name' ]
        }
    });

    if (!products.length) throw new Error("There's No Active Products in the Database!");

    return products;
};

module.exports = getActiveProducts;