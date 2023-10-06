require('dotenv').config();
const { Product } = require('../../database/database.js');

const putActivateProduct = async (idProduct, activate) => {
    const product = await Product.findOne({ where: { idProduct }});

    
    if (!product) throw new Error( 'Product not found' );

    product.active = activate;
    await product.save();

    
    return product;
};

module.exports = putActivateProduct;