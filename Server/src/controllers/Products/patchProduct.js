require('dotenv').config();
const { Product } = require('../../database/database.js');


const patchProduct = async (idProduct, newData) => {
        
        const product = await Product.findOne({ where: { idProduct }});

        for (const key in newData) {
            if (newData.hasOwnProperty(key)) {
                product[key] = newData[key];
            }
        }
       
            await product.save();
            

    if (!product)  throw new Error('Error modifying the product');

    return product;
    
};

module.exports = patchProduct;