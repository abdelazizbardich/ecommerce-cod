const router = require('express').Router();
const shopService = require('./shop.services');


router.get('/', async (req, res) => {
    const products = await shopService.getProducts();
    res.render('shop',{products,title:'shop'});
});


module.exports = router