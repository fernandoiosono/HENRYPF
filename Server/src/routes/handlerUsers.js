const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getActiveUsers,
    getUserAccess,
    getUserByID,
    getUsers,
    patchUser,
    postUser } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    // const users = await getUsers();

    // res.status(200).json(users);

    console.log('getUsers');
}));

router.get('/active', errorHandler(async (req, res) => {
    // const users = await getActiveUsers();

    // res.status(200).json(users);

    console.log('getActiveUsers');
}));

router.get('/access', errorHandler((req, res) => {
    // const { email, password } = req.query;
    // const access = getUserAccess(email, password);

    // res.status(200).json({ access: access });

    console.log('getUserAccess');
}));

router.get('/:id', errorHandler(async (req, res) => {
    // const { id } = req.params;
    // const user = await getUserByID(id);

    // res.status(200).json(user);

    console.log('getUserByID');
}));

router.post('/', errorHandler(async (req, res) => {
    // const newUser = req.body;
    // const userCreated = await postUser(newUser);

    // res.status(200).json(userCreated);

    console.log('postUser');
}));

router.patch('/', errorHandler(async (req, res) => {
    // const newData = req.body;
    // const userEdited = await patchUser(newData);

    // res.status(200).json(userEdited);

    console.log('patchUser');
}));

module.exports = router;