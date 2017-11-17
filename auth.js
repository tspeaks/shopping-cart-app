require('dotenv').config();
const User = require('./models/user');
const opts = {};

const JwtStrategy = require('passport-jwt').Strategy,
   ExtractJwt = require('passport-jwt').ExtractJwt;

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PASSPORT_SECRET;

const authService = (passport) => {
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
	console.log('whatever');
    User.findOne({_id: jwt_payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account 
        }
    });
}));
}

module.exports = authService;