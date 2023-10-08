const { ShoppingCart, Product, User } = require("../../database/database.js");

const postCartByUserID = async (idUser, localProducts) => {
    // Obtenemos los productos existentes en la BD
    const dbProducts = await ShoppingCart.findAll({
        where: { idUser: idUser }
    });

    // Agregamos a la BD productos nuevos en el carrito
    for (let x = 0; x < localProducts.length; x++) {
        const [ product, created ] = await ShoppingCart.findOrCreate({
            where: { idUser: idUser, idProduct: localProducts[x] },
            defaults: { idUser: idUser, idProduct: localProducts[x] }
        });
    };

    // Eliminamos de la BD productos que ya no estén en el carrito
    for (let x = 0; x < dbProducts.length; x++) {
        if (!localProducts.includes(dbProducts[x].idProduct)) {
            dbProducts[x].destroy();
        }
    };

    // Devolvemos los productos actualizados de la BD
    const updatedCart = await User.findAll({
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
                exclude: ['CategoryIdCategory']
            }
        }]
    });

    return updatedCart[0].products;
};

module.exports = postCartByUserID;