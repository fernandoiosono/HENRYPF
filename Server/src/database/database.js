require('dotenv').config();
const { Sequelize } = require('sequelize');

const { defineProduct, 
    defineCategory, 
    defineUser, 
    defineOrder,
    defineOrderProduct } = require('./models');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const conn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const database = new Sequelize(conn, { logging: false });

defineUser(database);
defineOrder(database);
defineProduct(database);
defineCategory(database);
defineOrderProduct(database);

const { Category, Product, User, Order } = database.models;

// Relationship Product - Category (1:N)
Category.hasMany(Product);
Product.belongsTo(Category);

// Relationship User - Order (1:N)
User.hasMany(Order);
Order.belongsTo(User);

// Relationship Order - Product (N:N)
Order.belongsToMany(Product, { 
    through: "OrderProduct",
    foreignKey: "idOrder",
    otherKey: "idProduct",
    as: "products",
    timestamps: false
});
Product.belongsToMany(Order, { 
    through: "OrderProduct",
    foreignKey: "idProduct",
    otherKey: "idOrder",
    as: "orders",
    timestamps: false
});

module.exports = {
    database,
    ...database.models
};