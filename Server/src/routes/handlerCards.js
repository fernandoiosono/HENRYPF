const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getCards,
    getCardsByUser,
    patchCard,
    postCard } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    // const cards = await getCards();

    // res.status(200).json(cards);

    res.status(200).send('getCards');
}));

router.get('/user', errorHandler(async (req, res) => {
    // const { idUser } = req.query;
    // const cards = await getCardsByUser(idUser);

    // res.status(200).json(cards);

    res.status(200).send('getCardsByUser');
}));

router.post('/', errorHandler(async (req, res) => {
    // const newCard = req.body;
    // const cardCreated = await postCard(newCard);

    // res.status(200).json(cardCreated);

    res.status(200).send('postCard');
}));

router.patch('/', errorHandler(async (req, res) => {
    // const newData = req.body;
    // const cardEdited = await patchCard(newData);

    // res.status(200).json(cardEdited);

    res.status(200).send('patchCard');
}));

module.exports = router;