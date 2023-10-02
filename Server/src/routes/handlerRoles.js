const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getRoles } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    // const roles = await getRoles();

    // res.status(200).json(roles);

    res.status(200).send('getRoles');
}));

module.exports = router;