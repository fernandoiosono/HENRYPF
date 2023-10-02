const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getCategories } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    const categories = await getCategories();

    res.status(200).json(categories);
}));

module.exports = router;