require('dotenv').config();
const axios = require('axios');
const { Category } = require('../../database/database.js');

const { LAPI_URL_CATEGORIES } = process.env;

const getCategories = async () => {
    const categoriesDB = await Category.findAll();

    if (!categoriesDB.length) {
        const { data } = await axios.get(LAPI_URL_CATEGORIES);

        await Category.bulkCreate(data);
    }

    const categories = await Category.findAll();

    return categories;
};

module.exports = getCategories;