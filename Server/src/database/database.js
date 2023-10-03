require('dotenv').config();
const { Sequelize } = require('sequelize');

const { defineProduct, 
    defineCategory, 
    defineUser, 
    defineOrder,
    defineCard,
    defineRole } = require('./models');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const conn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const database = new Sequelize(conn, { logging: false });

defineCategory(database);
defineRole(database);
defineCard(database);

defineProduct(database);
defineUser(database);
defineOrder(database);

const { Category, Card, Role, Product, User, Order } = database.models;

// Relationship Product - Category (1:N)
Category.hasMany(Product, { timestamps: false });
Product.belongsTo(Category, { timestamps: false });

// Relationship User - Role (1:N)
Role.hasMany(User, { timestamps: false });
User.belongsTo(Role, { timestamps: false });

// Relationship Order - Card (1:N)
Card.hasMany(Order, { timestamps: false });
Order.belongsTo(Card, { timestamps: false });

// Relationship Order - Product (N:N)
Order.belongsToMany(Product, { 
    through: "OrderProducts",
    foreignKey: "idOrder",
    otherKey: "idProduct",
    as: "products"
});
Product.belongsToMany(Order, { 
    through: "OrderProducts",
    foreignKey: "idProduct",
    otherKey: "idOrder",
    as: "orders" 
});

module.exports = {
    database,
    ...database.models
};