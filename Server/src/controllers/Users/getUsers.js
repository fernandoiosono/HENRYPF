require('dotenv').config();
const { User } = require('../../database/database.js');

const getUsers = async () => {
    const users = await User.findAll();

    if (!users.length) {
        throw new Error("There's No Users in the Database!");
    } else {
        newUsers = users.map(user=>{
            return {
                idUser: user.idUser,
                nickName: user.nickName,
                email: user.email,
                imageURL: user.imageURL,
                active: user.active,
                isAdmin: user.isAdmin,
            }
        })
    }

    return newUsers;
};

module.exports = getUsers;