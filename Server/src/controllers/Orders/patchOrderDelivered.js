const { Sequelize } = require("sequelize");
const { Order } = require("../../database/database.js");
const { PAID, DELIVERED } = require("../../helpers/Orders/orderStatus.js");

const patchOrderDelivered = async (idOrder) => {
    const order = await Order.findOne({
        where: {
            idOrder: idOrder,
            status: PAID
        }
    });

    if (!order) {
        throw new Error("The Order You're Attempting to Modify Doesn't Exist or It's Status Has Been Changed");
    }

    order.deliveredDate = Sequelize.fn('NOW');
    order.status = DELIVERED;
    await order.save();

    const modifiedOrder = await Order.findOne({
        where: {
            idOrder: idOrder    
        }
    });

    return modifiedOrder;
};

module.exports = patchOrderDelivered;