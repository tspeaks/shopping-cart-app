const express = require('express');
const router = express.Router();

const User = require('../models/user');

const routes = (passport) => {
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
		console.log(req.body);
	User.findByIdAndUpdate(req.user._id, { $set: {
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

router.delete('/', (req, res) => {
	const username = $.cookie('username');
	User.remove({username})

    .then(user => {
    	console.log('success');
		res.sendStatus(200);

    })
    .catch((err) => {
        console.log(err);
        res.send(403);
    })
});

return router;
}
module.exports = routes;

