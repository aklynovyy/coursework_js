var express = require('express');
var bodyParser = require('body-parser');
var indexPage = require('./view/indexPage.js');
var conditionsModule = require('./module/conditionsModule.js');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(indexPage.getPage());
});

app.get('/getAllData', function (req, res) {
  res.send(conditionsModule.getAllData());
});

app.listen(3030, function () {
  console.log('Server is run!!!');
});