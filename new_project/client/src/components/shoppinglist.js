import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Container, CardDeck, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge} from 'reactstrap'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemaction.js';
import PropTypes from 'prop-types';
import ItemModal from './itemModal.js'


class ShoppingList extends Component {
    //shortcut for constructor(props){ super(props); this.state = {} } but this shortcut might not receive props
	componentWillMount() {
	    this.props.getItems();
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
        const {items} = this.props.item;
        return (
           <div>
            <Container>
            <itemModal />
            	{/*<Button color='dark' style={{marginBottom: '2rem'}}>Add Item</Button>*/}
		        	<TransitionGroup className="shopping-list">
		            		<CardDeck>
		            		{items.map((item) => (
			            		<CSSTransition key={item._id} timeout={1000} classNames='fade'>
			            				<Card style={{height: '500px', maxWidth: '318px'}}>
									        <CardImg top width="100%" height="180px" className='img img-responsive' src={item.productImage} />
									        <CardBody>
									          <CardTitle style={{height: '40px'}} className='text-center'><strong>{item.name}</strong></CardTitle>
									          <CardSubtitle><Badge color='success' pill> ${(item.price).toFixed(2)}</Badge></CardSubtitle>
									          <CardText style={{height: '150px'}}>{item.description}</CardText>
									          <Button className="remove-btn" outline block color='danger' size='xs' 
			            					onClick={this.onDeleteClick.bind(this, item._id)}>&times;</Button>
									        </CardBody>
									    </Card>
			            		</CSSTransition>
			            	))}
		            		</CardDeck>
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

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);
