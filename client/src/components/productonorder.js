import React, { Component } from 'react';
import { postTotal, minusTotal, getOrders, updateOrder } from '../actions/orderaction.js'
import { connect } from 'react-redux';
import './productonorder.scss'


class ProductonOrder extends Component {
    constructor(props) {
        super(props);
        props.getOrders();
        this.state = {
            quantity: 1,
            subtotal: 0,
            initialTotal: 0
        }
    }

    componentDidMount() {
        this.setState({
            subtotal: this.props.price,
        })

    }


    increment = () => {
        this.setState({
            quantity: (this.state.quantity + 1),
            subtotal: (this.state.quantity + 1) * this.props.price
        })
        this.props.postTotal(this.props.price);
    }

    decrement = () => {
        this.setState({
            quantity: this.state.quantity - 1,
            subtotal: (this.state.quantity - 1) * this.props.price
        })
        this.props.minusTotal(this.props.price);
    }

    handleDelete = () => {
        const { orders } = this.props.order;
        const id = ((orders || {})[0] || {})._id;
        const product = ((orders || {})[0] || {}).product;
        const newProduct = product.filter(item => item._id !== this.props.id);
        console.log(newProduct);
        const toAdd = [{ 'propsName': 'product', 'value': newProduct }];
        this.props.minusTotal(this.state.subtotal);
        this.props.updateOrder(id, toAdd);
    }

    render() {
        return (
            <div>
                <div className='pooCard'>
                    <div className='pooHeader upper'>{this.props.name}</div>
                    <div className='body'>
                      <div className='pooImg'>
                          <img src={this.props.productImage} className='img img-responsive' alt=''/>
                      </div>
                      <div className='table'>
                          <div className='pooTxt'>{this.props.description}</div>
                          <div className='pooTxt2'>Price: ${this.props.price && (this.props.price).toFixed(2)}</div>
                      </div>
                      </div>
                    <div className='pooHeader lower'>
                    <p className='subtlt'>Subtotal: ${this.state.subtotal && (this.state.subtotal).toFixed(2)} for {this.state.quantity}</p>
                    <p className='btns'>
                        <i className="fa fa-minus" aria-hidden='true' onClick={this.decrement}> </i>
                        <i className="fa fa-plus" aria-hidden="true" onClick={this.increment}></i>
                        <i className="fa fa-trash" aria-hidden="true" onClick={this.handleDelete}></i>
                    </p>
                    </div>
                  </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    total: state.total,
    order: state.order
})

export default connect(mapStateToProps, { postTotal, minusTotal, getOrders, updateOrder })(ProductonOrder);;