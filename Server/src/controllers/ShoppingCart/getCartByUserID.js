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
                attributes: []
            },
            attributes: {
                exclude: ['description', 'CategoryIdCategory']
            }
        }]
    });
    
    return cart[0].products;
};

module.exports = getCartByUserID;