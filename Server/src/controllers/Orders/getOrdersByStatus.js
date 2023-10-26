const { User, Order } = require('../../database/database.js');

const getOrdersByStatus = async (status) => {
    const orders = await Order.findAll({
        where: {
            status: status
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

module.exports = getOrdersByStatus;