const handlerCards = require('./handlerCards.js');
const handlerCategories = require('./handlerCategories.js');
const handlerOrders = require('./handlerOrders.js');
const handlerProducts = require('./handlerProducts.js');
const handlerRoles = require('./handlerRoles.js');
const handlerUsers = require('./handlerUsers.js');

module.exports = {
    handlerCards,
    handlerUsers,
    handlerRoles,
    handlerOrders,
    handlerProducts,
    handlerCategories
};