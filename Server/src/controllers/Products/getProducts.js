require("dotenv").config();
const axios = require("axios");
const { Product, Category } = require("../../database/database.js");

const { LAPI_URL_PRODUCTS } = process.env;

const getProducts = async () => {
    // First we verify that the products are loaded in the database
	const productsDB = await Product.findOne();

    // And if not, we load them
    if (!productsDB) {
        const { data } = await axios.get(LAPI_URL_PRODUCTS);

        await Product.bulkCreate(data);
    }

    // This way we can always return the content of the database
    const products = await Product.findAll({
        attributes: {
            exclude: 'CategoryIdCategory'
        },
        include: [{
            model: Category,
            attributes: [ 'idCategory', 'name' ]
        }]
    });

	return products;
};

module.exports = getProducts;