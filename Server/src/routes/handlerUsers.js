const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getActiveUsers,
    getUserAccess,
    getUserByID,
    getUsers,
    patchUser,
    postUser } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    const users = await getUsers();

    res.status(200).json(users);
}));

router.get('/active', errorHandler(async (req, res) => {
    const users = await getActiveUsers();

    res.status(200).json(users);
}));

router.get('/access', errorHandler((req, res) => {
    const { email, password } = req.query;
    const access = getUserAccess(email, password);

    res.status(200).json({ access: access });
}));

router.get('/:id', errorHandler(async (req, res) => {
    const { id } = req.params;
    const user = await getUserByID(id);

    res.status(200).json(user);
}));

router.post('/', errorHandler(async (req, res) => {
    const newUser = req.body;
    const userCreated = await postUser(newUser);

    res.status(200).json(userCreated);
}));

router.patch('/', errorHandler(async (req, res) => {
    const newData = req.body;
    if(!newData.idUser){
        throw new Error('Falta id del usuario');
    } else {
        const userEdited = await patchUser(newData);
        res.status(200).json(userEdited);
    };  

    
}));

module.exports = router;