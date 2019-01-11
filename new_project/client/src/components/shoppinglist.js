import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Col, Row, CardDeck, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge } from 'reactstrap'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemaction.js';
import PropTypes from 'prop-types';


class ShoppingList extends Component {
    //shortcut for constructor(props){ super(props); this.state = {} } but this shortcut might not receive props
    componentWillMount() {
        this.props.getItems();
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    // enterItem = () => {
    // 	const name = prompt('Enter Item');
    // 	if(name) {
    // 		this.setState({
    // 			//or without curly braces after this.setState( use state => {}
    // 				items: this.state.items.concat({id: uuid(), name})
    // 			//or items: [...state.items, {id: uuid(), name}]
    // 			//name is an ES6 shortcut, but could read name: name	
    // 		});
    // 	}
    // }

    onDeleteClick = (_id) => {
        this.props.deleteItem(_id);
    }

    render() {
        const { items } = this.props.item;
        return (
            <div>
            <Container style={{paddingTop: '50px'}}>
            	{/*<Button color='dark' style={{marginBottom: '2rem'}}>Add Item</Button>*/}
		        	<TransitionGroup className="shopping-list">
		            		<Row>
			            		<CardDeck>
			            		{items.map((item) => (
				            		<CSSTransition key={item._id} timeout={1000} classNames='fade'>
			            				<Col md={4} style={{margin: '50px 0 50px 0'}}>
				            				<Card style={{height: '500px', maxWidth: '300px', backgroundColor: '#F5F5F5', border: 'solid pink 3px', borderRadius: '20px', boxShadow: '10px 10px 10px'}}>
										        <CardImg top width="100%" height="200px" style={{backgroundColor: 'white', borderRadius: '20px'}} className='img img-responsive' src={item.productImage} />
										        <CardBody>
										          <CardTitle style={{height: '40px'}} className='text-center'><strong>{item.name}</strong></CardTitle>
										          <CardSubtitle><Badge pill> ${(item.price).toFixed(2)}</Badge></CardSubtitle>
										          <CardText style={{height: '120px'}}>{item.description}</CardText>
										          <hr style={{backgroundColor: 'white'}}/>
										          <Button className="remove-btn" color='danger' size='xs' 
				            					onClick={this.onDeleteClick.bind(this, item._id)}>&times;</Button>
										        </CardBody>
										    </Card>
			            				</Col>
				            		</CSSTransition>
				            	))}
			            		</CardDeck>
		            		</Row>
		        	</TransitionGroup>
        {/* below is not needed in this application, but is normal way to map items in state and remember items is defined under render function 
            {items.map((item, i) => {return (<p key={i}>{item.name}</p>)})}	*/}
            </Container>
           </div>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);