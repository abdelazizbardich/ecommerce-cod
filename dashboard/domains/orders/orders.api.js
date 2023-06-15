const router = require('express').Router();

router.get('/',async (req,res)=>{
    res.render('orders',{title:'Orders'});
});
module.exports = router