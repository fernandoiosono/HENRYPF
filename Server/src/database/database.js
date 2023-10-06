require('dotenv').config();
const { Sequelize } = require('sequelize');

const { defineProduct, 
    defineCategory, 
    defineUser, 
    defineOrder,
    defineCard } = require('./models');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const conn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const database = new Sequelize(conn, { logging: false });

defineCategory(database);
defineCard(database);

defineProduct(database);
defineUser(database);
defineOrder(database);

const { Category, Card, Product, Order } = database.models;

// Relationship Product - Category (1:N)
Category.hasMany(Product);
Product.belongsTo(Category);

// Relationship Order - Card (1:N)
Card.hasMany(Order);
Order.belongsTo(Card);

// Relationship Order - Product (N:N)
Order.belongsToMany(Product, { 
    through: "OrderProducts",
    foreignKey: "idOrder",
    otherKey: "idProduct",
    as: "products",
    timestamps: false
});
Product.belongsToMany(Order, { 
    through: "OrderProducts",
    foreignKey: "idProduct",
    otherKey: "idOrder",
    as: "orders",
    timestamps: false
});

module.exports = {
    database,
    ...database.models
};