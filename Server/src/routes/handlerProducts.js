const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getActiveProducts,
    getProductByID,
    getProducts,
    getProductsByName,
    patchProduct,
    postProduct } = require('../controllers');

router.get('/all', errorHandler(async (req, res) => {
    const products = await getProducts();

    res.status(200).json(products);
}));

router.get('/active', errorHandler(async (req, res) => {
    const products = await getActiveProducts();

    res.status(200).json(products);
}));

router.get('/name', errorHandler(async (req, res) => {
    const { name } = req.query;
    const products = await getProductsByName(name);

    res.status(200).json(products);
}));

router.get('/:id', errorHandler(async (req, res) => {
    const { id } = req.params;
    const product = await getProductByID(id);

    res.status(200).json(product);
}));

router.post('/', errorHandler(async (req, res) => {
    const newProduct = req.body;
    const productCreated = await postProduct(newProduct);

    res.status(200).json(productCreated);
}));

router.patch('/', errorHandler(async (req, res) => {
    const newData = req.body;
    const productEdited = await patchProduct(newData);

    res.status(200).json(productEdited);
}));

module.exports = router;