var express = require('express');
var fs=require('fs');
var Q=require('q');
var mongo=require('mongodb');
var Server=mongo.Server;
var Db=mongo.Db;


var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    var db=new Db('Image',new Server('127.0.0.1','27017',{auto_reconnect:true},{}));
    db.open(function(err,db){
        var collection=db.collection("ImageInfo");

        collection.findOne({'StaffID':'CN000'},{}).then(proccessSelectData,proccessErr)
    });


    res.render('index',{"title":"Test Q"});

});

function proccessSelectData(data){

    console.log('success:'+JSON.stringify(data));
}
function proccessErr(err){
    console.log('111'+err)
}



module.exports = router;
