var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//박성수 branch



//정민우 branch
router.get('/minwoo', function(req, res){
  res.send('minwooooo');
});



//김율리 branch



//김수현 branch


//남종헌 branch

module.exports = router;
