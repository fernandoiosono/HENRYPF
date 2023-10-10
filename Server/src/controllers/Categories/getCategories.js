const { Category } = require('../../database/database.js');

const getCategories = async () => {
    const categories = await Category.findAll();

    if (!categories.length) throw new Error("There's No Categories in the Database!");

    return categories;
};

module.exports = getCategories;