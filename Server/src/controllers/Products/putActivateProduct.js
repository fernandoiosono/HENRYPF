require('dotenv').config();
const { Product } = require('../../database/database.js');

const putActivateProduct = async (idProduct, activate) => {
    const product = await Product.findOne({ 
        where: { idProduct: idProduct }
    });

    if (!product) throw new Error("The Product You Are Trying to Update Doesn't Exist!");

    await product.update( { active: activate } );

    return product;
};

module.exports = putActivateProduct;