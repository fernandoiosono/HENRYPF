const { Sequelize } = require('sequelize');
const { Order } = require('../../database/database.js');

const getOrdersByStatus = async (status) => {
    const orders = await Order.findAll({
        where: {
            status: status
        }
    });

    return orders;
};

module.exports = getOrdersByStatus;