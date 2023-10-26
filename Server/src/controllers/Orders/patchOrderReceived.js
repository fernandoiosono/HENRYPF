const { Sequelize } = require("sequelize");
const { Order } = require("../../database/database.js");
const { DELIVERED, RECEIVED } = require("../../helpers/Orders/orderStatus.js");

const patchOrderReceived = async (idOrder) => {
    const order = await Order.findOne({
        where: {
            idOrder: idOrder,
            status: DELIVERED
        }
    });

    if (!order) {
        throw new Error("The Order You're Attempting to Modify Doesn't Exist or It's Status Has Been Changed");
    }

    order.receivedDate = Sequelize.fn('NOW');
    order.status = RECEIVED;
    await order.save();

    const modifiedOrder = await Order.findOne({
        where: {
            idOrder: idOrder    
        }
    });

    return modifiedOrder;
};

module.exports = patchOrderReceived;