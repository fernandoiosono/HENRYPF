const router = require('express').Router();
const errorHandler = require('../middlewares');

const { createCheckoutSession, statusCheckout } = require('../controllers');

router.post('/create-checkout-session', errorHandler(async(req,res)=>{
    const data = req.body;
    const newSession = await createCheckoutSession(data);

    res.status(200).json(newSession);
}));

router.get('/:session_id', errorHandler(async(req,res)=>{
    const { session_id } = req.params;
    const status = await statusCheckout(session_id);

    res.status(200).json(status);
}));


module.exports = router;