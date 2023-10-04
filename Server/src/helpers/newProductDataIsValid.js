const { Product } = require('../database/database.js');

const newProductDataIsValid = async (data) => {
    switch (true) { // Use Switch to Optimize Validations
        case !data.name:
            throw new Error("Please Enter the Product's Name!");
        case !data.imageURL:
            throw new Error("Please Enter the Product's Image URL!");
        case !data.description:
            throw new Error("Please Enter the Product's Description!");
        case !data.price:
            throw new Error("Please Enter the Product's Price! (Must Be More Than $0)");
        case !data.stock:
            throw new Error("Please Enter the Product's Stock! (Must Be More Than 0)");
        default:
            const nameExists = await Product.findOne({
                where: { name: data.name }
            });

            if (nameExists) throw new Error('A Product with the Same Name Already Exists in the Database! Please Enter Another Name!')
    };

    return true;
};

module.exports = newProductDataIsValid;