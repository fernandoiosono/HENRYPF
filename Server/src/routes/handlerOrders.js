const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getOrderByID,
    getOrders,
    getOrdersByStatus,
    patchOrderPaid } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    const orders = await getOrders();

    res.status(200).json(orders);
}));

router.get('/status/:status', errorHandler(async (req, res) => {
    const { status } = req.params;
    const orders = await getOrdersByStatus(status);

    res.status(200).json(orders);
}));

router.get('/:id', errorHandler(async (req, res) => {
    const { id } = req.params;
    const order = await getOrderByID(id);

    res.status(200).json(order);
}));

router.patch('/paid/:idOrder', errorHandler(async (req, res) => {
    const { idOrder } = req.params;
    const data = req.body;
    const orderModified = await patchOrderPaid(idOrder, data);

    res.status(200).json(orderModified);
}));

module.exports = router;