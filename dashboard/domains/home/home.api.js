const router = require('express').Router();

router.get('/',async (req,res)=>{
    res.render('home',{title:'Dashboard'});
});

router.get('/login', async (req, res) => {
    res.render('login',{title:'login'});
});
router.get('/register', async (req, res) => {
    res.render('register',{title:'register'});
});

module.exports = router