const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//import from orders.js and products.js
const productRoutes = require("./routes/products");
const orderRoutes = require("./routes/orders");
const userRoutes = require("./routes/users");
const emailRoutes = require('./routes/emails');

const mongoUrlAdmin = "mongodb+srv://Stephenh1989:" + process.env.Mongo_PW + "@hoa-1fr8b.mongodb.net/test?retryWrites=true"
//put entire url in a variable instead of just the user and password.
mongoose.connect(mongoUrlAdmin, { useNewUrlParser: true });

mongoose.connection.once('open', () => { console.log('Connection success!'); }).on('error', (err) => { console.log('Connection error:', err); });

app.use(express.static('./Desktop/Programming/stirstick-app/public'));

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    //can restrict, making '*' the url of website ex: 'http://heartoftheartisan.com'
    res.header('Access-Control-Allow-Origin', '*');
    //could make headers allow : 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    res.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
    }
    next();
});

//for routing
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/users", userRoutes);
app.use('/send', emailRoutes);

//error handling - catch all error
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

//error handling - throw errors for indivual cases
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;