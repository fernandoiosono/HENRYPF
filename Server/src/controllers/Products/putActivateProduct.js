require('dotenv').config();
const { Product } = require('../../database/database.js');

const putActivateProduct = async (idProduct, activate) => {
    const product = await Product.findOne({ where: { idProduct }});

    
    if (!product) throw new Error( 'Producto no encontrado' );

    product.active = activate === "true";
    await product.save();

    
    return product;
};

module.exports = putActivateProduct;