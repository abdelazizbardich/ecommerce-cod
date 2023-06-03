const router = require('express').Router();
const reviewService = require('./reviews.service');
router.get('/',(req,res)=>{
    res.send('API OK!!!');
});

router.post('/',async (req,res)=>{
    try {
        const review = req.body;
        console.log('review',review);
        await reviewService.addReview(review);
        res.redirect('/product/'+review.product+"#reviews");
    } catch (error) {
        res.redirect('/product/'+review.product);
    }
});


module.exports = router