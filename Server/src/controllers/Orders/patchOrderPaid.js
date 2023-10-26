const { Sequelize } = require('sequelize');
const { Order } = require('../../database/database.js');
const { LOADED, PAID } = require('../../helpers/Orders/orderStatus.js');
const stripeAPI = require ('../../../stripe.js');

const patchOrderPaid = async (data) => {
    const { idUser, idStripeSession } = data;
    const paymentData = await stripeAPI.checkout.sessions.retrieve(idStripeSession);

    if (!paymentData) {
        throw new Error("It Was Impossible to Obtain the Payment Details!");
    }

    const order = await Order.findOne({
        where: {
            UserIdUser: idUser,
            status: LOADED
        }
    });

    if (!order) {
        throw new Error("The Order You're Attempting to Modify Doesn't Exist or It's Status Has Been Changed");
    }

    order.address = paymentData.shipping_details.address.line1;
    order.postalCode = paymentData.shipping_details.address.postal_code;
    order.phone = paymentData.customer_details.phone;
    order.amount = paymentData.amount_total/100;
    order.paymentDate = Sequelize.fn('NOW');
    order.status = PAID;
    await order.save();

    const paidOrder = await Order.findOne({
        where: {
            idOrder: order.idOrder
        }
    });

    return paidOrder;
};

module.exports = patchOrderPaid;