import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Container, Button, ListGroup, ListGroupItem} from 'reactstrap'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemaction.js';
import PropTypes from 'prop-types';

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
            	{/*<Button color='dark' style={{marginBottom: '2rem'}}>Add Item</Button>*/}
	            <ListGroup>
	            	<TransitionGroup className="shopping-list">
	            		{items.map(({name, _id}) => (
	            			<CSSTransition key={_id} timeout={1000} classNames='fade'>
	            				<ListGroupItem>
	            					<Button className="remove-btn" color='danger' size='xs' 
	            					onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
	            				{name}
	            				</ListGroupItem>
	            			</CSSTransition>
	            		))}
	            	</TransitionGroup>
	            </ListGroup>
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
