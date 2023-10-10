const router = require('express').Router();
const errorHandler = require('../middlewares');

const { getActiveProducts,
    getProductByID,
    getProducts,
    getProductsByName,
    patchProduct,
    postProduct,
    putActivateProduct,
    getProductsOrderPrice } = require('../controllers');

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

router.patch('/:idProduct', errorHandler(async (req, res) => {
    const { idProduct } = req.params;
    const newData = req.body;
    const productEdited = await patchProduct(idProduct, newData);

    res.status(200).json(productEdited);
}));

router.put('/:idProduct/', errorHandler(async (req, res) => {
    const { idProduct } = req.params;
    const { activate } = req.query;
    const productActivated = await putActivateProduct(idProduct, activate);

    res.status(200).json(productActivated);
}));

router.get('/', errorHandler(async (req, res) => {
    const { price } = req.query;
    const productsOrderByPrice = await getProductsOrderPrice(price);

    res.status(200).json(productsOrderByPrice);
}));

module.exports = router;