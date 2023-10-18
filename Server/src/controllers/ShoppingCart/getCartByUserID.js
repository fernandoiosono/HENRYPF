const { ShoppingCart, Product, User } = require("../../database/database.js");

const getCartByUserID = async (idUser) => {
    const cart = await User.findAll({
        where: { idUser: idUser },
        attributes: [],
        include: [{
            model: Product,
            as: "products",
            through: {
                model: ShoppingCart,
                attributes: [ "quantity" ]
            },
            attributes: {
                exclude: ['CategoryIdCategory']
            }
        }]
    });
    
    return cart[0].products;
};

module.exports = getCartByUserID;