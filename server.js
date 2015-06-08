'use strict'

var http = require('http'),
    path = require('path'),
    express = require('express'),
    app = express();

app.set('port', process.env.PORT )
app.set('views', __dirname + '/views/pages')
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', function(req, res) {
    res.render('index', { title: 'Best page ever' });
});

app.listen(9090)
