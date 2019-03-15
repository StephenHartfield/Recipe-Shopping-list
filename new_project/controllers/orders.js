const Order = require('../models/order');
const checkAuth = require('../middleware/check-auth');
const Product = require('../models/product');
const mongoose = require('mongoose');

exports.orders_get_all = (req, res, next) => {
    Order.find()
        .populate('product')
        .select('-__v')
        .exec()
        .then(docs => {
            // const response = {
            // 	count: docs.length,
            // 	orders: docs.map(doc => {
            // 		return {
            // 			quantity: doc.quantity,
            // 			product: doc.product,
            // 			_id: doc._id,
            // 			request: {
            // 				type: 'GET',
            // 				description: 'Go to specific order',
            // 				url: '/orders/' + doc._id
            // 			},
            // 			requestProduct: {
            // 				type: 'GET',
            // 				description: 'Go to specific product',
            // 				url: '/products/' + doc.product
            // 			}
            // 		}
            // 	})
            // }
            //	if(doc.length >= 0) {
            res.status(200).json(docs);
            //	} else {
            //		res.status(404).json({message: 'no entries found'})
            //	}
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
};

exports.orders_create_order = (req, res, next) => {
    Product.findById(req.body.productId)
        .then(product => {
            if (!product) {
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
}