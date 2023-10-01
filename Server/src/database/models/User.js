const { DataTypes } = require('sequelize');
module.exports = (database) => { 
   // defino el modelo 
   database.define('User', { 
  
    idUser: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false 
      },  

    name: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      },
    
    lastname: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      }, 
  
    email: { 
        type: DataTypes.STRING, 
        allowNull: false 
      }, 

    password: { 
        type: DataTypes.STRING, 
        allowNull: false, 
      },

    userType:{ 
        type: DataTypes.ENUM("cliente", "admin"), 
        allowNull: false 
      }, 

    state:{ 
        type: DataTypes.ENUM("Active"), 
        allowNull: false 
      },

    image: { 
        type:DataTypes.STRING, 
        allowNull: false 
      },
 }, {
  timestamps: false
 }
 ); 
 };