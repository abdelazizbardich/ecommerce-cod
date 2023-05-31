const router = require('express').Router();
const productApi = require('./domains/products/products.api');
const contactsApi = require('./domains/contacts/contacts.api');
const ordersApi = require('./domains/orders/orders.api');
const reviewsApi = require('./domains/reviews/reviews.api');
const categoriesApi = require('./domains/categories/categories.api');
router.use('/product',productApi);
router.use('/contacts',contactsApi);
router.use('/orders',ordersApi);
router.use('/reviews',reviewsApi);
router.use('/categories',categoriesApi);

module.exports = router