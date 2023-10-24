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

    const cartProducts = (cart.Orders.length) ? cart.Orders[0].dataValues.products : cart.Orders;
    
    return cartProducts;
};

module.exports = getCartByUserID;