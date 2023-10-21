const { ShoppingCart, Product, User } = require("../../database/database.js");

const postCartByUserID = async (idUser, localProducts) => {

    // Agregamos a la BD productos nuevos en el carrito
    for (let x = 0; x < localProducts.length; x++) {
        const idProduct = localProducts[x].idProduct;
        const quantity = localProducts[x].quantity;

        const [ product, created ] = await ShoppingCart.findOrCreate({
            where: { idUser: idUser, idProduct: idProduct },
            defaults: { quantity: quantity }
        });

        if (!created) {
            product.quantity = quantity;
            product.save();
        }
    };

    // Obtenemos los productos existentes en la BD
    const dbProducts = await ShoppingCart.findAll({
        where: { idUser: idUser }
    });

    // Eliminamos de la BD productos que ya no estén en el carrito
    for (let x = 0; x < dbProducts.length; x++) {
        const idProduct = dbProducts[x].idProduct;

        const existingProduct = localProducts.filter(product => 
            product.idProduct === idProduct
        );

        if (!existingProduct.length) dbProducts[x].destroy();
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
                attributes: [ "quantity" ]
            },
            attributes: {
                exclude: ['CategoryIdCategory']
            }
        }]
    });

    return updatedCart[0].products;
};

module.exports = postCartByUserID;