const { DataTypes } = require('sequelize');
module.exports = (database) => { 
   // defino el modelo 
   database.define('Category', { 
  
    idCategory: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: true 
      },  
  
    name: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      },

    description: { 
        type:DataTypes.TEXT, 
        allowNull:false 
      },

 }, {
  timestamps: false
 }
 ); 
 };