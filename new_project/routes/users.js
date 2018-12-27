const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');

const User = require('../models/user');

router.post('/signup', (req, res, next) => {
	User.find({email: req.body.email})
		.exec()
		.then(user => {
			if (user.length >= 1) {
				return res.status(422).json({
					message: 'email exists'
				});
			} else {
				bcrypt.hash(req.body.password, 10, (err, hash) => {
					if(err){
						return res.status(500).json({
						error: err
						});
					} else {
						const user = new User({
							_id: new mongoose.Types.ObjectId(),
							email: req.body.email,
							password: hash
						});
						user
							.save()
							.then(result => {
								console.log(result);
								res.status(201).json({
									message: 'User Created'
								})
							})
							.catch(err => {
								console.log(err);
								res.status(500).json({
									error: err
								})
							});
					}				
			})
			}
		})		
})

router.post('/login', (req, res, next) => {
	//could be User.findOne
	User.find({ email: req.body.email })
	.exec()
	.then(user => {
		if(user.length < 1){
			return res.status(404).json({
				message: 'Auth failed'
			})			
			// below is not a great pattern, but something could use. the problem is people can find a list eventually and focus on those emails to hack it.
			// return res.status(404).json({
			// 	message: "Mail not found, user doesn\'t exist."
			// });
		}
		bcrypt.compare(req.body.password, user[0].password, (err, result) => {
			if(user.length < 1){
				return res.status(404).json({
					message: 'Auth failed'
				})	
			}
			if(result) {
				const token = JWT.sign({
					email: user[0].email,
					userId: user[0]._id
				}, 
				process.env.JWT_Key,
				{
					expiresIn: '1h'
				}); 
				return res.status(200).json({
					message: "Auth successful",
					token: token
				})
			}
			res.status(401).json({
				message: "Auth failed"
			})
		})
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		})
	})
})

router.delete('/:userId', (req, res, next) => {
	User.remove({_id: req.params.userId})
	.exec()
	.then(result => {
		res.status(200).json({
			message: "User deleted"
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
})

module.exports = router;