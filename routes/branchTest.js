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


//김율리 branch


//김수현 branch



//남종현 branch

module.exports = router;
