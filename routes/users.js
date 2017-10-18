const express = require('express');
const passport = require('../auth');
const router = express.Router();

const User = require('../models/user');

router.post('/', (req, res) => {
	const { username, password } = req.body;
	User.create({username, password})
	.then(user => {
		return res.json(user.apiRepr());
	})
	.catch((err) => {
		console.log(err);
		res.send(403);
	})
});

router.put('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { address, city, state, 
			zipcode, phone, email } = req.body;
		console.log(req.get('Authorization'));
	User.findByIdAndUpdate(req.params.id, { $set: {
		address, city, state, 
		zipcode, phone, email}})
	.then((user) => {
	return res.json(user.apiRepr());		
	})
	.catch((err) => {
		console.log(err);
		res.send(403);
	})
});
module.exports = router;

