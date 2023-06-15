const router = require('express').Router();

const productApi = require('./domains/products/products.api');
const contactsApi = require('./domains/contacts/contacts.api');
const ordersApi = require('./domains/orders/orders.api');
const reviewsApi = require('./domains/reviews/reviews.api');
const categoriesApi = require('./domains/categories/categories.api');
const shopApi = require('./domains/shop/shop.api');
const homeApi = require('./domains/home/home.api');


router.use('/product', productApi);
router.use('/contact', contactsApi);
router.use('/order', ordersApi);
router.use('/review', reviewsApi);
router.use('/categorie', categoriesApi);
router.use('/shop', shopApi);
router.use('/', homeApi);

module.exports = router