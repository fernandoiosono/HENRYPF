require('dotenv').config();
const axios = require('axios');
const { Product } = require('../../database/database.js');

const { LAPI_URL_PRODUCTS } = process.env;

const getProductByID = async (idProduct) => {

    const productsDB = await Product.findOne({ where: { idProduct } });

    const { data } = await axios.get(LAPI_URL_PRODUCTS);

    if (productsDB) {
        return productsDB;
    }
    if (!productsDB) {
        return null;
    }
   
    return { data, productsDB };
     // Devuelve los datos recuperados de la API y el registro de la base de datos.
};

module.exports = getProductByID;