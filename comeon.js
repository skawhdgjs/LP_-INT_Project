var app = express(); //익스프레스가 미들웨어를 제어하는 프레임워크? 패키지임


app.use(function (req, res, next)
{
  console.log('time', Date.now());
  next();
});

app.use('/user/:id', function (req,res,next)
{
  console.log('request type:', req.method);
  next();
});

app.get('/user/:id', function (req, res, next)
{
  res.send('user');
})
