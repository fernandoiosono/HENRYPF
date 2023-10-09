require('dotenv').config();
const { User } = require('../../database/database.js');

const getActiveUsers = async () => {
    const users = await User.findAll({
        where: {
            active: true
        }
    });

    if (!users.length) {throw new Error("There's No Active Users in the Database!")}
    else {
        const newUsers = users.map(user=>{
            return {
                idUser: user.idUser,
                name: user.name,
                nickName: user.nickName,
                email: user.email,
                imageURL: user.imageURL,
                active: user.active,
                isAdmin: user.isAdmin,
            };
        });
        return newUsers;

    };
    
};

module.exports = getActiveUsers;