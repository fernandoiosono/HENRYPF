const { DataTypes } = require('sequelize'); 
module.exports = (database) => { 
   // defino el modelo 
   database.define('Product', { 
  
    idProduct: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: true 
      },  
  
    name: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 

    image: { 
        type:DataTypes.STRING, 
        allowNull: false 
      }, 

    description: { 
        type:DataTypes.TEXT, 
        allowNull: false 
      }, 
  
    price: { 
        type:DataTypes.INTEGER, 
        allowNull: false 
      }, 
  
    stock: { 
        type: DataTypes.INTEGER, 
        default: 0, 
      }, 
  
    state: { 
        type: DataTypes.ENUM("Active"), 
        allowNull: false 
      },

    discount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  
 }, {
  timestamps: false
 }
 ); 
 };