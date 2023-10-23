const { Order } = require('../../database/database.js');

const getOrderByID = async (idOrder) => {
    const order = await Order.findOne({
        where: {
            idOrder: idOrder
        }
    });

    return order;
};

module.exports = getOrderByID;