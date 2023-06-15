const router = require('express').Router();
const categoriesService = require('../categories/categories.service')

router.get('/',async (req,res)=>{
    const categories = await categoriesService.getCategories();
    res.render('categories',{title:'Categories',categories});
});


module.exports = router