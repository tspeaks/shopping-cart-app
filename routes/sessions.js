const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const routes = (passport) => {
router.post('/', (req, res) => {
	console.log("session");
	let user;
	User.findOne({username: req.body.username}).exec()
	.then(u => {
		user = u;
		if(user){
			return user.verifyPassword(req.body.password);
		} else {
			return false;
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
			res.sendStatus(403);
		}
	})
	.catch((err) => {
		console.log(err);
		res.sendStatus(500);
	})
});
return router;
}
module.exports = routes;
