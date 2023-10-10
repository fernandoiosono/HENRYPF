require('dotenv').config();
const { Product, Category } = require('../../database/database.js');

const getProductByID = async (id) => {
    const product = await Product.findOne({ 
        where: { 
            idProduct: id 
        },
        attributes: {
            exclude: 'CategoryIdCategory'
        },
        include: [{
            model: Category,
            attributes: [ 'idCategory', 'name' ]
        }]
        
    });

    if (!product) throw new Error("The Product with the ID Entered Doesn't Exist");

    return product;
};

module.exports = getProductByID;