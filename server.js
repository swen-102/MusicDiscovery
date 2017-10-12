var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var api = require('./server/routes/api');

var port = 4200;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Set Static Folder (Angular Stuffs)
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Bypass Access-Control-Allow-Origin issue
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//Routes
app.use('/api', api); 

//Listen to run server
app.listen(port, function(){
    console.log("Server started on port " + port);
});