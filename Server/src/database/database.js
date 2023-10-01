require('dotenv').config();
const { Sequelize } = require('sequelize');

const { defineProduct, 
    defineCategory, 
    defineUser } = require('./models');

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const conn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;

const database = new Sequelize(conn, { logging: false });

defineProduct(database);
defineCategory(database);
defineUser(database);

const { Product, Category, User } = database.models;

Category.hasMany(Product, { timestamps: false });
//Una Categoria tiene varios Productos
Product.belongsTo(Category, { timestamps: false });
//Un Producto pertenece a una Categoria

User.belongsToMany(Product, {
    through: "UserProduct",
    foreignKey: "idUsuario",
    otherKey: "idProduct",
    timestamps: false
})

module.exports = {
    database,
    ...database.models
};