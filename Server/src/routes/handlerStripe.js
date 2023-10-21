const router = require('express').Router();
const errorHandler = require('../middlewares');

const { createCheckoutSession } = require('../controllers');

router.post('/create-checkout-session', errorHandler(async(req,res)=>{
    const data = req.body;
    const newSession = await createCheckoutSession(data);

    res.status(200).json(newSession);
}));

module.exports = router;