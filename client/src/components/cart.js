import React, { Component } from 'react';
import { postTotal, minusTotal, getOrders, updateOrder } from '../actions/orderaction.js'
import { getItem } from '../actions/itemaction.js'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductonOrder from './productonorder.js'
import './cart.css'

class Cart extends Component {
    constructor(props) {
        super(props);
        props.getOrders();
    }

    componentDidMount() {
        const { total } = this.props.order;
        const { product } = ((this.props.order.orders || {})[0] || {});
        setTimeout(() => {
            if (product) {
                product.map(product => this.props.postTotal(product.price))
            }
        }, 2000);
    }

    render() {
        const { product } = ((this.props.order.orders || {})[0] || {});
        const { total } = this.props.order;
        // const name = ((order || {}).product || {}).name;
        // const price = ((order || {}).product || {}).price;
        // const description = ((order || {}).product || {}).description;
        // const productImage = ((order || {}).product || {}).productImage;
        // let total = price * (this.state.quantity);

        return (
            <div className='cart-full'>
                <h1>Total: ${total && parseFloat(total).toFixed(2)}</h1>
                <div className='all-orders'>
                    {product && product.map((product) => (
                        <div key={product._id}>
                            <ProductonOrder id={product._id} name={product.name} price={product.price} description={product.description} productImage={product.productImage} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    getOrders: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
    order: state.order,
    total: state.total
})

export default connect(mapStateToProps, { getItem, getOrders, postTotal })(Cart);