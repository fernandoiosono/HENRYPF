require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');
const { validate } = require('uuid');

const { LAPI_URL_USERS } = process.env;

const getUserByID = async (id) => {
    if(validate(id)){
        const user = await User.findByPk(id);
        if(user){
            return {
                idUser: user.idUser,
                name: user.name,
                nickName: user.nickName,
                email: user.email,
                imageURL: user.imageURL,
                active: user.active,
                isAdmin: user.isAdmin,
            };
        } else throw new Error(`el id ${id} no existe en la base de datos`);
        
    } else throw new Error('Error en la solicitud a la base de datos');  
};

module.exports = getUserByID;