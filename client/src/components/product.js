import React, { Component } from 'react';
import { getItem } from '../actions/itemaction.js'
import { addOrder, getOrders, updateOrder, postTotal } from '../actions/orderaction.js'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'
import './product.scss'

class Product extends Component {
    constructor(props) {
        super(props);
        const id = this.props.match.url.slice(10);
        props.getItem(id);
        props.getOrders();
        this.state = {
            popoverOpen: false,
            popoverMessage: '',
            products: {}
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Heart of the Artisan | Store'
    }

    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        })
        setTimeout(() => {
            this.setState({
                popoverOpen: false
            })

        }, 5000)
    }

    onImgLoad = ({ target: img }) => {
        img.style.height = img.naturalHeight;
        img.style.width = img.naturalWidth;
    }

    onCartHandle = (item) => {
        const newOrder = {
            productId: item._id,
            quantity: 1
        }
        if (this.props.order.orders.length === 0) {
            this.props.addOrder(newOrder);
            this.setState({
                popoverMessage: 'Order created.'
            });
        } else {
            this.setState({
                popoverMessage: 'Order already exists. Add to Order?'
            });
        }

        // if (!this.state.popoverOpen) {
        //     this.props.addOrder(newOrder);
        // }
        this.toggle();
    }

    yesHandle = (item) => {
        const { orders } = this.props.order
        const id = ((orders || {})[0] || {})._id;
        const product = ((orders || {})[0] || {}).product;
        const newProduct = product.concat(item);
        const toAdd = [{ 'propsName': 'product', 'value': newProduct }]
        var that = this;

        function update() {
            that.setState({
                popoverMessage: item.name + ' ' + that.props.order.msg
            })
        }

        this.props.updateOrder(id, toAdd);
        this.props.postTotal(item.price);
        update();
        setTimeout(() => { this.toggle(); }, 2000);
    }

    render() {
        const { item } = this.props.item;
        return (
            <div className='product-full'>
                <div className='button-ctnr'>
                    <button className='button-shop'> 
                        <NavLink to='/Store' className='shop-link'>Return to Store</NavLink>
                    </button>
                    <Button type='button' id='Pop1' className="cart-btn" color='success' size='xs' title='add to cart'
                        onClick={this.onCartHandle.bind(this, item)}>
                        <i className='fa fa-shopping-cart'></i>
                    </Button>
                    <Popover placement='bottom' isOpen={this.state.popoverOpen} target='Pop1' toggle={this.toggle}>
                        <PopoverHeader>Your Cart</PopoverHeader>
                        <PopoverBody>{this.state.popoverMessage}</PopoverBody>
                        {this.state.popoverMessage.length > 15 ? 
                            <PopoverBody>
                                <Button color='success' onClick={this.yesHandle.bind(this, item)}>Yes</Button>
                                <Button color='danger'>No</Button>
                            </PopoverBody> : 
                            <PopoverBody>Add Quantity</PopoverBody>
                        }
                    </Popover>
                </div>
                <div className='to-flex container'>
                    <div className='product-line'>
                        <div className='product-details'>
                            <h1>{item.name}</h1>
                            <h2 className='product-price'>${item.price}</h2>
                            <p className='description'>{item.description}</p>   
                        </div>
                    </div>
                    <div>
                        <div className="image-container">
                            <img src={'/' + item.productImage} alt={item.productImage} onLoad={this.onImgLoad} className='img img-responsive'/>
                        </div>
                    </div>
                </div>
                 <div className='button-ctnr'>
                    <button className='button-shop'> 
                        <NavLink to='/Store' className='shop-link'>Return to Store</NavLink>
                    </button>
                    <Button className="cart-btn" color='success' size='xs' title='add to cart'
                        onClick={this.onCartHandle.bind(this, item)}>
                        <i className='fa fa-shopping-cart'></i>
                    </Button>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    getItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item,
    order: state.order,
    msg: state.msg
})

export default connect(mapStateToProps, { getItem, addOrder, getOrders, updateOrder, postTotal })(Product);