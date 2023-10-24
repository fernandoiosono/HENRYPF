const { Product, User, Order, OrderProduct } = require("../../database/database.js");

const { LOADED } = require("../../helpers/Orders/orderStatus.js");

const postCartByUserID = async (idUser, localProducts) => {
    // Buscamos una Orden en Status STAGED Registrada por el Usuario, si no Existe la Creamos
    const [ order, created ] = await Order.findOrCreate({
        where: {
            UserIdUser: idUser,
            status: LOADED
        }
    });

    const idOrder = order.idOrder;

    // Agregamos a la BD productos nuevos en el carrito
    for (let x = 0; x < localProducts.length; x++) {
        const idProduct = localProducts[x].idProduct;
        const quantity = localProducts[x].quantity;

        const [ product, created ] = await OrderProduct.findOrCreate({
            where: { idOrder: idOrder, idProduct: idProduct },
            defaults: { quantity: quantity }
        });

        if (!created) {
            product.quantity = quantity;
            await product.save();
        }
    };

    // Obtenemos los productos existentes en la BD
    const dbProducts = await OrderProduct.findAll({
        where: { idOrder: idOrder }
    });

    // Eliminamos de la BD productos que ya no estén en el carrito
    for (let x = 0; x < dbProducts.length; x++) {
        const idProduct = dbProducts[x].idProduct;

        const existingProduct = localProducts.filter(product => 
            product.idProduct === idProduct
        );

        if (!existingProduct.length) await dbProducts[x].destroy();
    };

    const updatedCart = await User.findByPk(idUser, {
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

    return updatedCart.Orders[0].dataValues.products;
};

module.exports = postCartByUserID;