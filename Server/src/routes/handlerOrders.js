const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getOrderByID,
    getOrders,
    getOrdersByUser,
    postOrder } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    // const orders = await getOrders();

    // res.status(200).json(orders);

    res.status(200).send('getOrders');
}));

router.get('/user', errorHandler(async (req, res) => {
    // const { idUser } = req.query;
    // const orders = await getOrdersByUser(idUser);

    // res.status(200).json(orders);

    res.status(200).send('getOrdersByUser');
}));

router.get('/:id', errorHandler(async (req, res) => {
    // const { id } = req.params;
    // const order = await getOrderByID(id);

    // res.status(200).json(order);

    res.status(200).send('getOrderByID');
}));

router.post('/', errorHandler(async (req, res) => {
    // const newOrder = req.body;
    // const orderCreated = await postOrder(newOrder);

    // res.status(200).json(orderCreated);

    res.status(200).send('postOrder');
}));

module.exports = router;