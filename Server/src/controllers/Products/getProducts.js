require('dotenv').config();
const axios = require('axios');
const { Product, Category } = require('../../database/database.js');

// const { LAPI_URL_PRODUCTS } = process.env;

const mapProduct = (e) => ({ 
    idProduct: e.idProducto, 
    name: e.nombre, 
    imageURL: e.imagen,
    description: e.descripcion,
    price: e.precio,
    stock: e.stock,
    discount: e.descuento,
    active: e.active,
 }); 
  
 const saveProducts = async () => { 
   try { 
     const response = await axios.get('http://localhost:5000/products');
     const productos = response.data ? response.data.map(mapProduct) : []; 
     const result = await Product.bulkCreate(productos, { ignoreDuplicates: true }); 
     console.log('Product save:', result.length);
   } catch (error) { 
    console.error('Error making the request:', error); 
   } 
 }; 

const getProducts = async () => {
        const products = await Product.findAll({ 
          attributes: ['idProduct', 'name', 'imageURL', 'description', 'price', 'stock', 'discount', 'active'], 
          include: { 
            model: Category, 
            attributes: ["name"] 
          } 
        }); return products;
};

saveProducts();

module.exports =
getProducts;