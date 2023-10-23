const { Sequelize } = require('sequelize');
const { Order } = require('../../database/database.js');
const { LOADED, PAID } = require('../../helpers/Orders/orderStatus.js');

const patchOrderPaid = async (idOrder, data) => {
    const order = await Order.findOne({
        where: {
            idOrder: idOrder,
            status: LOADED
        }
    });

    if (order) {
        order.address = data.address;
        order.postalCode = data.postalCode;
        order.phone = data.phone;
        order.amount = data.amount;
        order.paymentDate = Sequelize.fn('NOW');
        order.status = PAID;

        await order.save();
    } else {
        throw new Error("The Order You're Attempting to Modify Doesn't Exist or It's Status Has Been Changed");
    }

    const paidOrder = await Order.findOne({
        where: {
            idOrder: idOrder
        }
    });

    return paidOrder;
};

module.exports = patchOrderPaid;