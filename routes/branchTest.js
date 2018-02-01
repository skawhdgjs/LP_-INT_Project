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
<<<<<<< HEAD


//남종헌 branch
<<<<<<< HEAD
=======
router.get('/suhyeon',(req,res)=>{
  res.send("kkkk");
})


//남종헌 branch


>>>>>>> su-hyeon-branch
=======
router.get('/nam',function(req ,res, next){
  res.send('hello')
})

>>>>>>> 6d391e684953a185bb86e1c921976f776a4da92b

module.exports = router;
