var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//박성수 branch
console.log("hello world!!");


//정민우 branch
router.get('/mwtest', function(req, res, next){
  res.send('testtttttt');
});



//김율리 branch
router.get('/', function(req ,res , next){
  res.send("hi")
})

//김수현 branch
/*email*/

//남종헌 branch
router.get('/nam', function(req ,res , next){
  res.send("hi nam")
})


module.exports = router;
