require('dotenv').config();
const { Op } = require('sequelize');
const { Product, Category } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const getProductsByName = async (name) => {
    const products = await Product.findAll({
        where: { 
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        attributes: {
            exclude: 'CategoryIdCategory'
        },
        include: [{
            model: Category,
            attributes: [ 'idCategory', 'name' ]
        }]
    });

    if (!products.length) throw new Error("There are no products that match the word entered!");

    return products;
};

module.exports = getProductsByName;