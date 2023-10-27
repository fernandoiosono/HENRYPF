const { Sequelize } = require('sequelize');
const stripeAPI = require ('../../../stripe.js');
const { LOADED, PAID } = require('../../helpers/Orders/orderStatus.js');
const { Order, Product, OrderProduct } = require('../../database/database.js');

const patchOrderPaid = async (data) => {
    const { idUser, idStripeSession } = data;

    // Obtenemos la Información de Pago de Stripe
    const paymentData = await stripeAPI.checkout.sessions.retrieve(idStripeSession);

    if (!paymentData) {
        throw new Error("It Was Impossible to Obtain the Payment Details!");
    }

    const shippingDetails = paymentData.shipping_details.address;
    const address = `Dirección: ${shippingDetails.line1} / Colonia: ${shippingDetails.line2} / Ciudad: ${shippingDetails.city} / Estado: ${shippingDetails.state} / País: ${shippingDetails.country}`;

    // Obtenemos la Orden para Poder Editarla
    const order = await Order.findOne({
        where: {
            UserIdUser: idUser,
            status: LOADED
        }
    });

    if (!order) {
        throw new Error("The Order You're Attempting to Modify Doesn't Exist or It's Status Has Been Changed");
    }

    // Llenamos y Guardamos la Orden con los Datos Restantes
    order.address = address;
    order.postalCode = shippingDetails.postal_code;
    order.phone = paymentData.customer_details.phone;
    order.amount = paymentData.amount_total/100;
    order.paymentDate = Sequelize.fn('NOW');
    order.status = PAID;
    await order.save();

    // Obtenemos la Orden ya Editada desde la Base de Datos
    const paidOrder = await Order.findOne({
        where: {
            idOrder: order.idOrder
        }
    });

    // Obtenemos los Productos Relacionados a la Orden
    const products = await OrderProduct.findAll({
        where: {
            idOrder: order.idOrder
        },
        attributes: ["idProduct", "quantity"]
    });

    // Actualizamos el Stock de los Productos, Restando las Cantidades Compradas por el Cliente
    for (let x = 0; x < products.length; x++) {
        const idProduct = products[x].idProduct;
        const quantity = products[x].quantity;

        const product = await Product.findOne({
            where: {
                idProduct: idProduct
            }
        });

        product.stock -= quantity;
        await product.save();
    }

    // Devolvemos la Orden Editada
    return paidOrder;
};

module.exports = patchOrderPaid;