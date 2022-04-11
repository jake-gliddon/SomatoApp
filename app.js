const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const _ = require('lodash');

//App setup
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//Get Routes
app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/calcs', function(req, res){
    res.render('calculator');
});

app.get('/download', function(req, res){
    res.render('download');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

//App Listen
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
  });