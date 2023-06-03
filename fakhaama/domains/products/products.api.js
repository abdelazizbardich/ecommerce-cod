const router = require('express').Router();
const productsService = require('./products.service');


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await productsService.getProduct(id);
    const linkedProducts = await productsService.getProductsByCategory(product.category_id);
    console.log('linkedProducts',linkedProducts);
    res.render('product',{product,linkedProducts,title:product.title});
});


module.exports = router