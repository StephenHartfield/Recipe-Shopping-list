const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Please upload only .jpeg or .png files'), false);
    }
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})

const Product = require('../models/product');

//since any GET request prefixed with /products routes here, no need filter with anything more than '/'
router.get('/', (req, res, next) => {
    Product.find()
        .select('-__v')
        .exec()
        //descending sort order
        //.sort({ date: -1 })
        .then(docs => {
            res.status(200).json(docs);
        })
        // const response = {
        //  count: docs.length,
        //  products: docs.map(doc => {
        //      return {
        //          name: doc.name,
        //          price: doc.price,
        //          _id: doc._id,
        //          productImage: doc.productImage,
        //          request: {
        //              type: 'GET',
        //              url: '/products/' + doc._id
        //          }
        //      }
        //  })
        // }
        //  if(doc.length >= 0) {
        //  } else {
        //      res.status(404).json({message: 'no entries found'})
        //  }
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
});
//post method
//router.post('/', checkAuth, upload.single('productImage'), (req, res, next) => {  })
router.post("/", upload.single('productImage'), (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        productImage: req.file.path
    });
    console.log(req.body);
    product.save()
        .then(result => {
            res.status(201).json(result
                // _id: result._id,
                // name: result.name,
                // price: result.price
                // message: 'Created product successfully',
                // createdProduct: {
                //name: result.name
                //price: result.price,
                //  _id: result._id,
                //productImage: result.productImage,
                // request: {
                //  type: 'GET',
                //  url: '/products/' + result._id
                // }
                //}
            );
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .select('-__v')
        .exec()
        .then(doc => {
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({ message: 'No valid entry found for provided ID' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    //try for incoming data that doesn't need to be in an array:
    // for(const key in req.body) {
    //  updateOps[key] = req.body[key];
    // }
    // or for(const key of Object.keys(req.body)) { updateOps[key] = req.body[key]} for simple 

    //must update with array of JSON data
    for (const ops of req.body) {
        updateOps[ops.propsName] = ops.value;
    }
    Product.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                result
                // message: 'Product updated successfully!',
                // request: {
                //     type: 'GET',
                //     url: '/products/' + id
                // }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        });
    //code below is required to update both name and price at the same time
    //Product.update({_id: id}, { $set: {name: req.body.newName, price: req.body.newPrice } })

})
//add checkAuth, after '/:productId',
router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.deleteOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Product deleted successfully!',
                request: {
                    type: 'GET',
                    description: 'Return to products',
                    url: '/products'
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
})

module.exports = router;