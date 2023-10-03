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

    return products;
};

module.exports = getProductsByName;