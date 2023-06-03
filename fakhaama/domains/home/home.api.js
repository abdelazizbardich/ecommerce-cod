const router = require('express').Router();
const homeService = require('./home.service');


router.get('/', async (req, res) => {
    const products = await homeService.getProducts();
    console.log('products',products);
    res.render('home',{products,title:'home'});
});

router.get('/privacy', async (req, res) => {
    res.render('privacy',{title:'privacy'});
});

router.get('/terms', async (req, res) => {
    res.render('terms',{title:'terms'});
});

router.get('/faqs', async (req, res) => {
    res.render('faqs',{title:'faqs'});
});
router.get('/login', async (req, res) => {
    res.render('login',{title:'login'});
});
router.get('/register', async (req, res) => {
    res.render('register',{title:'register'});
});

router.get('/shipping-and-returns', async (req, res) => {
    res.render('shipping-and-returns',{title:'shipping-and-returns'});
});


module.exports = router