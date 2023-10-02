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

    res.status(200).send('getUsers');
}));

router.get('/active', errorHandler(async (req, res) => {
    // const users = await getActiveUsers();

    // res.status(200).json(users);

    res.status(200).send('getActiveUsers');
}));

router.get('/access', errorHandler((req, res) => {
    // const { email, password } = req.query;
    // const access = getUserAccess(email, password);

    // res.status(200).json({ access: access });

    res.status(200).send('getUserAccess');
}));

router.get('/:id', errorHandler(async (req, res) => {
    // const { id } = req.params;
    // const user = await getUserByID(id);

    // res.status(200).json(user);

    res.status(200).send('getUserByID');
}));

router.post('/', errorHandler(async (req, res) => {
    // const newUser = req.body;
    // const userCreated = await postUser(newUser);

    // res.status(200).json(userCreated);

    res.status(200).send('postUser');
}));

router.patch('/', errorHandler(async (req, res) => {
    // const newData = req.body;
    // const userEdited = await patchUser(newData);

    // res.status(200).json(userEdited);

    res.status(200).send('patchUser');
}));

module.exports = router;