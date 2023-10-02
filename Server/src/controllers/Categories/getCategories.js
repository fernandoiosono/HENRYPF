require('dotenv').config();
const axios = require('axios');
const { Category } = require('../../database/database.js');

const { LAPI_URL_CATEGORIES } = process.env;

const getCategories = async () => {
    return "getCategoriesController";
};

module.exports = getCategories;