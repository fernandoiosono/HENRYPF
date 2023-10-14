require('dotenv').config();
const axios = require('axios');
const { User } = require('../../database/database.js');
const mailer = require('../../config/mailer.js')

const { LAPI_URL_USERS } = process.env;

const postUser = async (newUser) => {

    const {idAuth0, name, nickName, email, imageURL} = newUser;

    const [user, created] = await User.findOrCreate({
        where: {
            idAuth0: idAuth0,           
        },
        defaults: {
            name: name,
            email: email,
            nickName: nickName,
            imageURL: imageURL,
        },
    });

    if(created){
        mailer.sendMail(user);
        return {
        idUser: user.idUser,
        name: user.name,
        nickName: user.nickName,
        email: user.email,
        imageURL: user.imageURL,
        active: user.active,
        isAdmin: user.isAdmin,
        message: 'Ha sido creado con exito'
    }}
    else return {
        idUser: user.idUser,
        name: user.name,
        nickName: user.nickName,
        email: user.email,
        imageURL: user.imageURL,
        active: user.active,
        isAdmin: user.isAdmin,
    };
};

module.exports = postUser;