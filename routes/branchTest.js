var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//박성수 branch



//정민우 branch




//김율리 branch



//김수현 branch
<<<<<<< HEAD


//남종헌 branch
=======
router.get('/suhyeon',(req,res)=>{
  res.send("test");
})


//남종헌 branch


>>>>>>> su-hyeon-branch

module.exports = router;
