const express = require('express');
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

module.exports = router;