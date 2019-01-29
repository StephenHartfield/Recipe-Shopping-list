import React, { Component } from 'react';
import { getItem } from '../actions/itemaction.js'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row, Container, CardImg, Button } from 'reactstrap'
import './product.scss'

class Product extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getItem(this.props.match.url)
    }

    render() {
        const item = this.props.item.item;
        return (
            <div className='product-full'>
            	<Container className='product-container'>
	            	<Row>
	            		<button className='button-shop'> 
		            		<NavLink to='/Store' className='shop-link'>Return to Store</NavLink>
	            		</button>
	            	</Row>
	            	<Row className='product-line'>
	            		<Col className='product-details'>
	            			<h1>{item.name}</h1>
	            			<h2 className='product-price'>${item.price}</h2>
	            			<p>{item.description}</p>	
	            		</Col>
	            		<Col>
	            			<CardImg src={item.productImage} alt={item._id} />
	            		</Col>
	            	</Row>
            	</Container>
            </div>
        );
    }
}

Product.propTypes = {
    getItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItem })(Product);