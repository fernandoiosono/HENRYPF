require('dotenv').config();
const { Product } = require('../../database/database.js');

const putActivateProduct = async (idProduct, activate) => {
    const product = await Product.findOne({ where: { idProduct }});

    product.active = activate === "true";
    await product.save();

    if (!product) throw new Error( 'Producto no encontrado' );
    
    return product;
};

module.exports = putActivateProduct;