const { Order } = require('../../database/database.js');

const getActiveOrders = async () => {
    const orders = await Order.findAll();

    return orders;
};

module.exports = getActiveOrders;