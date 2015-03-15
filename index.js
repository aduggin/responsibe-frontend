var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.engine('html', exphbs({defaultLayout: 'main', extname: 'html'}));
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', { title: 'Responsible Frontend' });
});

app.get('/base', function(req, res) {
  res.render('base');
});

app.get('/form', function(req, res) {
  res.render('form');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});