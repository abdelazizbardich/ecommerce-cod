const router = require('express').Router();
const productsService = require('./products.service');
const categoriesService = require('../categories/categories.service')

router.get('/',async (req,res)=>{
    const products = await productsService.getProducts();
    const categories = await categoriesService.getCategories();
    res.render('products',{title:'Products',products,categories});
});


router.post('/',async (req,res) => {
    try {
        await productsService.addProduct(req.body);
        res.redirect('/products');
    } catch (error) {
        console.log('error',error);
        res.send(error);
    }
})

module.exports = router