const { Product, User, Order } = require("../../database/database.js");

const getCartByUserID = async (idUser) => {
    const cart = await User.findByPk(idUser, {
        include: [{
            model: Order,
            include: {
                model: Product,
                as: "products",
                attributes: {
                    exclude: ['description', 'active', 'CategoryIdCategory']
                }
            }
        }],
        attributes: []
    });
    
    return cart.Orders[0].dataValues.products;
};

module.exports = getCartByUserID;