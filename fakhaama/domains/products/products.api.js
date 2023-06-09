const router = require('express').Router();
const productsService = require('./products.service');


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('id',id);
    const product = await productsService.getProduct(id);
    const linkedProducts = await productsService.getProductsByCategory(product.category_id);
    const reviews = await productsService.getReviwes(id);
    res.render('product',{product,linkedProducts,reviews,title:product.title});
});


module.exports = router