require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');

const { LAPI_URL_USERS } = process.env;

const patchUser = async (newData) => {
    const [updatedRowsCount, [updatedUser]] = await User.update(
            {
                name: newData.name !== undefined ? newData.name : User.name,
                nickName: newData.nickName !== undefined ? newData.nickName : User.nickName,
                imageURL: newData.imageURL !== undefined ? newData.imageURL : User.imageURL,
                active: newData.active !== undefined ? newData.active : User.active,
                isAdmin: newData.isAdmin !== undefined ? newData.isAdmin : User.isAdmin,
            },
            {
                where: { idUser: newData.idUser },
                returning: true,
            }
        );

    if(updatedRowsCount === 0) throw new Error('Usuario no encontrado');

    return {
        idUser: updatedUser.idUser,
        name: updatedUser.name,
        nickName: updatedUser.nickName,
        email: updatedUser.email,
        imageURL: updatedUser.imageURL,
        active: updatedUser.active,
        isAdmin: updatedUser.isAdmin,
    };
};

module.exports = patchUser;