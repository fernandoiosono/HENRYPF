const { Op } = require('sequelize');
const { User, Order } = require('../../database/database.js');
const { LOADED } = require('../../helpers/Orders/orderStatus.js');

const getActiveOrders = async () => {
    const orders = await Order.findAll({
        where: {
            status: {
                [Op.not]: LOADED
            }
        },
        attributes: [
            "idOrder",
            "amount",
            "status"
        ],
        include: {
            model: User,
            attributes: ["nickName"]
        }
    });

    return orders;
};

module.exports = getActiveOrders;