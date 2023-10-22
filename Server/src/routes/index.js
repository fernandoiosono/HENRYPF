const handlerCards = require('./handlerCards.js');
const handlerCategories = require('./handlerCategories.js');
const handlerOrders = require('./handlerOrders.js');
const handlerProducts = require('./handlerProducts.js');
const handlerUsers = require('./handlerUsers.js');
const handlerStripe = require('./handlerStripe.js');

module.exports = {
    handlerCards,
    handlerUsers,
    handlerOrders,
    handlerStripe,
    handlerProducts,
    handlerCategories
};