const defineCategory = require("./Category.js");
const defineOrder = require("./Order.js");
const defineOrderProduct = require("./OrderProduct.js");
const defineProduct = require("./Product.js");
const defineUser = require("./User.js");

module.exports = {
    defineUser,
    defineOrder,
    defineProduct,
    defineCategory,
    defineOrderProduct
};