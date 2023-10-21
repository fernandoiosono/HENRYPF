require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const { defineProduct, 
    defineCategory, 
    defineUser, 
    defineOrder,
    defineCard,
    defineShoppingCart } = require('./models');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const conn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

// const { DB_DEPLOY } = process.env;
// const conn = DB_DEPLOY;

const database = new Sequelize(conn, { logging: false });

defineCard(database);
defineUser(database);
defineOrder(database);
defineProduct(database);
defineCategory(database);
defineShoppingCart(database);

const { Category, Product, User, Order, Card } = database.models;

// Relationship Product - Category (1:N)
Category.hasMany(Product);
Product.belongsTo(Category);

// Relationship Order - Card (1:N)
Card.hasMany(Order);
Order.belongsTo(Card);

// Relationship Order - Product (N:N)
User.belongsToMany(Product, { 
    through: "ShoppingCart",
    foreignKey: "idUser",
    otherKey: "idProduct",
    as: "products",
    timestamps: false
});
Product.belongsToMany(User, { 
    through: "ShoppingCart",
    foreignKey: "idProduct",
    otherKey: "idUser",
    as: "users",
    timestamps: false
});

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