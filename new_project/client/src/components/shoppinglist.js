import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid'
import {Container, Button, ListGroup, ListGroupItem} from 'reactstrap'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemaction.js';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
    //shortcut for constructor(props){ super(props); this.state = {} } but this shortcut might not receive props
	componentDidMount() {
	    this.props.getItems();
	} 

    enterItem = () => {
    	const name = prompt('Enter Item');
    	if(name) {
    		this.setState({
    			//or without curly braces after this.setState( use state => {}
    				items: this.state.items.concat({id: uuid(), name})
    			//or items: [...state.items, {id: uuid(), name}]
    			//name is an ES6 shortcut, but could read name: name	
    		});
    	}
    }

    render() {
        const {items} = this.props.item;
        return (
           <div>
            <Container>
            	<Button color='dark' style={{marginBottom: '2rem'}} onClick={this.enterItem}>Add Item</Button>
	            <ListGroup>
	            	<TransitionGroup className="shopping-list">
	            		{items.map(({id, name}) => (
	            			<CSSTransition key={id} timeout={1000} classNames='fade'>
	            				<ListGroupItem>
	            					<Button className="remove-btn" color='danger' size='xs' 
	            					onClick={() => {this.setState({items: items.filter(item => item.id !== id)})}}>&times;</Button>
	            				{name}
	            				</ListGroupItem>
	            			</CSSTransition>
	            		))}
	            	</TransitionGroup>
	            </ListGroup>
        {/* below is not needed in this application, but is normal way to map items in state and remember items is defined under render function */}
            {items.map((item, i) => {return (<p key={i}>{item.name}</p>)})}	
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

export default connect(mapStateToProps, {getItems})(ShoppingList);
