const {
  Order,
  User,
  Product,
  OrderProduct,
} = require("../../database/database.js");

const getOrderByID = async (idOrder) => {
  const order = await Order.findOne({
    where: {
      idOrder: idOrder,
    },
    attributes: {
      exclude: ["UserIdUser"],
    },
    include: [
      {
        model: User,
        attributes: ["name", "email"],
      },
      {
        model: Product,
        as: "products",
        attributes: ["name", "imageURL"],
        through: {
          model: OrderProduct,
          as: "shoppingCart",
          attributes: ["quantity"],
        },
      },
    ],
  });

  return order;
};

module.exports = getOrderByID;
