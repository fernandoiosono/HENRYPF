const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getOrderByID,
    getOrders,
    patchOrderPaid } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    const orders = await getOrders();

    res.status(200).json(orders);
}));

router.get('/:id', errorHandler(async (req, res) => {
    const { id } = req.params;
    const order = await getOrderByID(id);

    res.status(200).json(order);
}));

router.patch('/paid/:idOrder', errorHandler(async (req, res) => {
    const { idOrder } = req.params;
    const orderData = req.body;
    const orderModified = await patchOrderPaid(idOrder, orderData);

    res.status(200).json(orderModified);
}));

module.exports = router;