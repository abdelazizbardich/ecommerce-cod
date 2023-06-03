const router = require('express').Router();
const contactService = require('./contacts.service');

router.get('/',(req,res)=>{
    res.render('contact',{title:'contact',success:false})
});

router.post('/',async (req,res)=>{
    try {
        const contact = req.body;
        await contactService.addContact(contact);
        res.render('contact',{title:'order registred',success:true});
    } catch (error) {
        console.log('error',error);
    }
});


module.exports = router