require('dotenv').config();
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const JwtStrategy = require('passport-jwt').Strategy,
   ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {};
const path = require('path')
const sessions = require('./routes/sessions')
const users = require('./routes/users')

// Define the port to run on
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(bodyParser());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});
// Listen for requests
	

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PASSPORT_SECRET;
opts.issuer = process.env.PASSPORT_ISSUER;
opts.audience = process.env.PASSPORT_AUDIENCE;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
	console.log('whatever');
    // User.findOne({id: jwt_payload.sub}, function(err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account 
    //     }
    // });
}));
app.use('/sessions', sessions);
app.use('/users', users);
mongoose.connect(process.env.MONGO_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const server = app.listen(app.get('port'), function() {
  const port = server.address().port;
  console.log('Magic happens on port ' + port);
});		





