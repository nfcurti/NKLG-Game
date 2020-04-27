const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set('views', __dirname + '/');
var coinCounter = 0
router.get('/',function(req,res){
  res.render('index',{coinCounter:coinCounter})
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

router.post('/',function(req,res){
	coinCounter = coinCounter+parseInt(req.body.score)
	console.log(coinCounter)
});

router.get('/data', function(req, res){
	res.send(coinCounter)
});



//add the router
app.use('/', router);
app.use("/public",express.static("public"));
app.listen(process.env.port || 3002);

console.log('Running at Port 3002');