const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.post('/', (req, res) => {
	console.log("session");
	let user;
	User.findOne({username: req.body.username}).exec()
	.then(u => {
		user = u;
		if(user){
			return user.verifyPassword(req.body.password);
		} else {
			res.send(403);
		}
	})
	.then((valid) => {
		if(valid) {	
			const payload = {
				id: user.id
			}
			const token = jwt.sign(payload, process.env.PASSPORT_SECRET);
			res.json({
				token
			});
		} else {
			res.send(403);
		}
	})
	.catch((err) => {
		console.log(err);
		res.send(500);
	})
});

module.exports = router;
