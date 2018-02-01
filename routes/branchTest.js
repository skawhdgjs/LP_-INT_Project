var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//박성수 branch
router.get('/sungsu', (req, res) =>
{
  res.send('hi! my name is sungsu!');
});
//comment

//정민우 branch
router.get('/minwoo', function(req, res, next){
  res.send('hi hello');
});

//김율리 branch
router.get('/', function(req, res, next){
  res.send('world')
})

//김수현 branch
router.get('/suhyeon', function(req, res, next){
  res.send('su-hyeon.kim@linecorp.com');
});

<<<<<<< HEAD
//남종현 branch
=======

//남종헌 branch
router.get('/nam', function(req ,res ,next){
  res.send('heoo')
})
>>>>>>> 5aab27f5b12f7012c56378bc1322063e4e015f7a

module.exports = router;
