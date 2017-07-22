var express = require('express')
  , logger = require('morgan')
  , app = express()
  , bodyParser = require('body-parser')
  , path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  console.log(req.body) // populated!
  next()
});

var port = process.env.PORT || 4000;

//Routing
app.get('/', function(req, res) {
	res.render('home.ejs');
});

//More Setup
app.use(express.static(__dirname + '/static'));

app.listen(port);
console.log('jasonki.com running on port ' + port);
