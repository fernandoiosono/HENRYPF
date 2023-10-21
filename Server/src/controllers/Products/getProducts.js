require("dotenv").config();
const { Product, Category } = require("../../database/database.js");

const getProducts = async () => {
    const products = await Product.findAll({
        attributes: {
            exclude: 'CategoryIdCategory'
        },
        include: [{
            model: Category,
            attributes: [ 'idCategory', 'name' ]
        }]
    });

    if (!products.length) throw new Error("There's No Products in the Database!");

	return products;
};

module.exports = getProducts;