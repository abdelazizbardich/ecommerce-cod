const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('contact',{title:'contact'})
});
router.post('/',(req,res)=>{
    res.render('contact',{title:'contact'})
});


module.exports = router