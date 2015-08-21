var express = require('express');
var router = express.Router();
var validate=require('../tools/modules/Validate');



router.get('/home',function(req,res,next){
    if(!req.session.username) {
        res.redirect('/users/login');
    }
    else{
        res.send('welcome'+req.session.username);
    }
});
/* GET users listing. */
router.get('/login',validate({type:"url",list:[{key:"name",require:true,range:"20-40",
        msg:["请输入name","name范围是20-40"]}]})
    , function(req, res, next) {


    if(!req.session.username){
        res.render('login');
    }
    res.redirect('/users/home')
});

router.post('/login',function(req,res,next){
    var name=req.body.username;

    if(!req.session.username){
        req.session.username=name;
    }
    res.redirect('/users/home')
});


module.exports = router;
