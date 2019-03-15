const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');
const checkAuth = require('../middleware/check-auth');
const OrdersController = require('../controllers/orders');

//since any GET request prefixed with /orders routes here, no need filter with anything more than '/'
router.get('/', OrdersController.orders_get_all);

router.post('/', OrdersController.orders_create_order);

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    Order.findById(id)
        .select('-__v')
        .populate('product', '-__v')
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc)
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

router.delete('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    Order.deleteOne({ _id: id })
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
            res.status(500).json({ error: err });
        })
})

router.patch('/:orderId', (req, res, next) => {
    const id = req.params.orderId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propsName] = ops.value;
    }
    Order.findOneAndUpdate({ _id: id }, { $set: updateOps }, { "new": true })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
})

module.exports = router;