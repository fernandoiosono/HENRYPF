require('dotenv').config();
const axios = require('axios');
const { Category } = require('../../database/database.js');

const { LAPI_URL_CATEGORIES } = process.env;

const getCategories = async () => {
    // First we verify that the categories are loaded in the database
    const categoriesDB = await Category.findOne();

    // And if not, we load them
    if (!categoriesDB) {
        const { data } = await axios.get(LAPI_URL_CATEGORIES);

        await Category.bulkCreate(data);
    }

    // This way we can always return the content of the database
    const categories = await Category.findAll();

    return categories;
};

module.exports = getCategories;