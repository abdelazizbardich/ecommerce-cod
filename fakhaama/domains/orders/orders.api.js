const router = require('express').Router();

router.post('/',(req,res)=>{
    res.render('order-confirm',{title:'order registred'})
});


module.exports = router