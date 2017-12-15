require('dotenv').config();
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authService = require('./auth');

const app = express();
authService(passport);


const path = require('path')


// Define the port to run on
app.set('port', process.env.PORT || 3000);
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});
// Listen for requests
	
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'dashboard.html' ));
}) 
app.use('/sessions', require('./routes/sessions')(passport));
app.use('/users', require('./routes/users')(passport));
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
  console.log('Magic happens on port ' + port);
});		





