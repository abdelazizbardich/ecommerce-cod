const router = require('express').Router();

const homeApi = require('./domains/home/home.api');
const productsApi = require('./domains/products/products.api');
const ordersApi = require('./domains/orders/orders.api');
const categoriesApi = require('./domains/categories/categories.api');

router.use('/', homeApi);
router.use('/products', productsApi);
router.use('/orders', ordersApi);
router.use('/categories', categoriesApi);

module.exports = router