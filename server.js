const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

const port = 3000;

const index = require('./routes/index');
const artists = require('./routes/artists');
const users = require('./routes/users');

// Connect to database
mongoose.connect(config.database, {useMongoClient: true});
mongoose.connection.on('connected', () => {
    console.log('Connected to database!');
});
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});


//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Passport MW
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Bypass Access-Control-Allow-Origin issue
// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

// Routes
app.use('/', index);
app.use('/users', users);
app.use('/api', artists);

// Start Server
app.listen(port, function(){
    console.log('Server started on port '+port);
});