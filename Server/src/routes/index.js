const handlerCategories = require('./handlerCategories.js');
const handlerOrders = require('./handlerOrders.js');
const handlerProducts = require('./handlerProducts.js');
const handlerShoppingCart = require('./handlerShoppingCart.js');
const handlerStripe = require('./handlerStripe.js');
const handlerUsers = require('./handlerUsers.js');

module.exports = {
    handlerUsers,
    handlerOrders,
    handlerStripe,
    handlerProducts,
    handlerCategories,
    handlerShoppingCart
};