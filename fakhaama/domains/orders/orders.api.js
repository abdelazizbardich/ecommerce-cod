const router = require('express').Router();
const orderService = require('./orders.service');

router.post('/', async (req,res)=>{
    try {
        const order = req.body;
        await orderService.addOrder(order);
        res.render('order-confirm',{title:'order registred'})
    } catch (error) {
        console.log('error',error);
    }
});


module.exports = router