const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');
const checkAuth = require('../middleware/check-auth');

//since any GET request prefixed with /orders routes here, no need filter with anything more than '/'
router.get('/', checkAuth, (req, res, next) => {
	Order.find()
	.populate('product', 'name')
	.exec()
	.then(docs => {
		const response = {
			count: docs.length,
			orders: docs.map(doc => {
				return {
					quantity: doc.quantity,
					product: doc.product,
					_id: doc._id,
					request: {
						type: 'GET',
						description: 'Go to specific order',
						url: '/orders/' + doc._id
					},
					requestProduct: {
						type: 'GET',
						description: 'Go to specific product',
						url: '/products/' + doc.product
					}
				}
			})
		}
	//	if(doc.length >= 0) {
			res.status(200).json(response);	
	//	} else {
	//		res.status(404).json({message: 'no entries found'})
	//	}
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: err});
	})
});

router.post('/', checkAuth, (req, res, next) => {
	Product.findById(req.body.productId)
	.then(product => {
		if(!product) {
			return res.status(404).json({
				message: 'Product Not Found'
			});
		}
		const order = new Order({
		_id: mongoose.Types.ObjectId(),
		quantity: req.body.quantity,
		product: req.body.productId
		});
		return order
		.save()
	})
	.then(result => {
		res.status(200).json({
			message: 'Order created',
			order: result._id,
			product: result.product,
			quantity: result.quantity,
			request: {
				type: 'GET',
				url: '/orders/' + result._id
			}
		});
	})
	.catch(err => {
		res.status(500).json(err);
	})
})

router.get('/:orderId', checkAuth, (req, res, next) => {
	const id = req.params.orderId;
	Order.findById(id)
	.select('-__v')
	.populate('product', '-__v')
	.exec()
	.then(result => {
		if(result){
			res.status(200).json({
			order: result,
			request: {
				type: 'GET',
				description: 'See all orders',
				url: '/orders'
			},
			requestProduct: {
				type: 'GET',
				description: 'See product',
				url: '/product' + result.product
			}	
			})
		} else {
			res.status(404).json({
				message: 'Not found',
				request: {
					type: 'GET',
					description: 'See all orders',
					url: '/orders'
				}
			});
		}
	})
	.catch(err => {
		res.status(500).json(err);
	})	
})

router.delete('/:orderId', checkAuth, (req, res, next) => {
	const id = req.params.orderId;
	Order.deleteOne({_id: id})
	.exec()
	.then(result => {
		res.status(200).json({
			message: 'Order deleted successfully!',
			request: {
				type: 'GET',
				description: 'Return to orders',
				url: '/orders'
			}
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: err});
	})
})

module.exports = router;