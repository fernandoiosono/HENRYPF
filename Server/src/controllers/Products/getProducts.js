require("dotenv").config();
const axios = require("axios");
const { Product, Category } = require("../../database/database.js");

const { LAPI_URL_PRODUCTS } = process.env;

const getProducts = async () => {
	const productsDB = await Product.findAll();
    const { data } = await axios.get(LAPI_URL_PRODUCTS);

    if (!productsDB.length) await Product.bulkCreate(data);

	return data;
};

module.exports = getProducts;