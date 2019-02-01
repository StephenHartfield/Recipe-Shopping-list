import React, { Component } from 'react';
import { getItem } from '../actions/itemaction.js'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row, Container, CardImg, Button } from 'reactstrap'
import './product.scss'
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: ''
        }
    }

    componentDidMount() {

        const id = this.props.match.url.slice(10);
        const that = this;

        function getTheImage() {
            return that.props.getItem(id)
            // axios.get(`/uploads/${that.props.item.item.productImage}`)
            //     .then(result => {
            //         that.setState({
            //             imagePath: result
            //         });
            //     });
        }
        (async () => {
            await getTheImage();
            console.log(this.props.item.item); // expected output: 'resolved'
            // var image;
            // image = this.props.item.item.productImage.slice(8);
            // this.setState({
            //     imagePath: `/uploads/${image}`
            // });
        })();
    }

    render() {
        const { item } = this.props.item;
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
                            <img src={this.state.imagePath} alt=""/>
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