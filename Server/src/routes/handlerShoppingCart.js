const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getCartByUserID,
    postCartByUserID } = require('../controllers');

router.get('/:idUser', errorHandler(async (req, res) => {
    const { idUser } = req.params;
    const cartContent = await getCartByUserID(idUser);

    res.status(200).json(cartContent);
}));

router.post('/:idUser', errorHandler(async (req, res) => {
    const { idUser } = req.params;
    const products = req.body;
    const cartContent = await postCartByUserID(idUser, products);

    res.status(200).json(cartContent);
}));

module.exports = router;