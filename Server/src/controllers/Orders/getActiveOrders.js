const { Op } = require('sequelize');
const { Order } = require('../../database/database.js');

const getActiveOrders = async () => {
    const orders = await Order.findAll({
        where: {
            status: {
                [Op.not]: "ARCHIVED"
            }
        }
    });

    return orders;
};

module.exports = getActiveOrders;