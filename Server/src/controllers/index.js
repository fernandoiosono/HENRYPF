// Categories Folder
const getCategories = require('./Categories/getCategories.js');

// Orders Folder
const getOrderByID = require('./Orders/getOrderByID.js');
const getOrders = require('./Orders/getOrders.js');
const getOrdersByUser = require('./Orders/getOrdersByUser.js');
const patchOrderPaid = require('./Orders/patchOrderPaid.js');
const postOrder = require('./Orders/postOrder.js');

// Products Folder
const getActiveProducts = require('./Products/getActiveProducts.js');
const getProductByID = require('./Products/getProductByID.js');
const getProducts = require('./Products/getProducts.js');
const getProductsByName = require('./Products/getProductsByName.js');
const patchProduct = require('./Products/patchProduct.js');
const postProduct = require('./Products/postProduct.js');
const putActivateProduct = require('./Products/putActivateProduct.js');

// ShoppingCart Folder
const getCartByUserID = require('./ShoppingCart/getCartByUserID.js');
const postCartByUserID = require('./ShoppingCart/postCartByUserID.js');

// Users Folder
const getActiveUsers = require('./Users/getActiveUsers.js');
const getUserByID = require('./Users/getUserByID.js');
const getUsers = require('./Users/getUsers.js');
const patchUser = require('./Users/patchUser.js');
const postUser = require('./Users/postUser.js');

// Stripe Folder
const createCheckoutSession = require('./Stripe/createCheckoutSession.js');

module.exports = {
    getCategories,

    getOrderByID,
    getOrders,
    getOrdersByUser,
    patchOrderPaid,
    postOrder,

    getActiveProducts,
    getProductByID,
    getProducts,
    getProductsByName,
    patchProduct,
    postProduct,
    putActivateProduct,

    getCartByUserID,
    postCartByUserID,

    getActiveUsers,
    getUserByID,
    getUsers,
    patchUser,
    postUser,

    createCheckoutSession
};