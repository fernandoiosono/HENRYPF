require('dotenv').config();
const axios = require('axios');
const { Category } = require('../../database/database.js');

const { LAPI_URL_CATEGORIES } = process.env;

const loadCategories = async () => {
    const categoriesDB = await Category.findOne();

    if (!categoriesDB) {
        const { data } = await axios.get(LAPI_URL_CATEGORIES);

        await Category.bulkCreate(data);

        console.log('Category model Filled from Local API on Port 5000');
    }
};

module.exports = loadCategories;