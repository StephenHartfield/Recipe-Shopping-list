import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, Col, Row, CardDeck, Button, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Badge, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux';
import { getItems, deleteItem, updateItem } from '../actions/itemaction.js';
import PropTypes from 'prop-types';


class ShoppingList extends Component {
    //shortcut for constructor(props){ super(props); this.state = {} } is just state = {} but this shortcut might not receive props
    state = {
        modal: false,
        specItem: {},
        name: '',
        price: '',
        description: '',
        productImage: null
    }

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
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onDeleteClick = (_id) => {
        this.props.deleteItem(_id);
    }

    onUpdateClick = myItem => {
        this.setState({
            modal: !this.state.modal,
            specItem: myItem
        })
    }

    onSubmit = e => {
        e.preventDefault();

        let newData = [];
        if (this.state.name) {
            newData.push({ 'propsName': 'name', 'value': this.state.name })
        }
        if (this.state.price) {
            newData.push({ 'propsName': 'price', 'value': this.state.price })
        }
        if (this.state.description) {
            newData.push({ 'propsName': 'description', 'value': this.state.description })
        }
        this.props.updateItem(this.state.specItem._id, newData);

        //Close the modal
        this.setState({
            modal: !this.state.modal,
            specItem: {}
        })
    }

    render() {
        const { items } = this.props.item;
        return (
            <div>
            <Container style={{padding: '50px 0 50px 0'}}>
            	{/*<Button color='dark' style={{marginBottom: '2rem'}}>Add Item</Button>*/}
		        	<TransitionGroup className="shopping-list">
		            		<Row>
			            		<CardDeck>
			            		{items.map((item) => (
				            		<CSSTransition key={item._id} timeout={1000} classNames='fade'>
			            				<Col md={4} sm={{size: 6, offset: 0}} xs={{size: 'auto', offset: 2}} style={{marginTop: '50px', marginBottom: '50px'}}>
				            				<Card style={{height: '500px', maxWidth: '300px', backgroundColor: '#F5F5F5', border: 'solid pink 3px', borderRadius: '20px', boxShadow: '10px 10px 10px'}}>
										        <div style={{height: '200px', overflow: 'hidden', borderRadius: '20px'}}><CardImg width='100%' style={{backgroundColor: 'white', borderRadius: '20px'}} className='img img-responsive' src={item.productImage} />
										        </div>
										        <CardBody>
										          <CardTitle style={{height: '40px'}} className='text-center'><strong>{item.name}</strong></CardTitle>
										          <CardSubtitle><Badge pill> ${(item.price).toFixed(2)}</Badge></CardSubtitle>
										          <CardText style={{height: '120px'}}>{item.description}</CardText>
										          <hr style={{backgroundColor: 'white'}}/>
										          <Button className="remove-btn" color='danger' size='xs' 
				            					onClick={this.onDeleteClick.bind(this, item._id)}>&times;</Button>
										          <Button className="remove-btn" color='primary' size='xs' 
				            					onClick={this.onUpdateClick.bind(this, item)}>
				            					<i className='fas fa-pen'></i></Button>
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
            <Modal isOpen={this.state.modal} toggle={this.onUpdateClick}>
                    <ModalHeader toggle={this.onUpdateClick}>
                        Update to: <strong>{this.state.specItem.name}</strong>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Item</Label>
                                <Input type='text' name='name' id='item' placeholder={this.state.specItem.name} onChange={this.onChange} />
                                <br/>
                                <Input type='number' step='0.01' name='price' id='price' placeholder={this.state.specItem.price} onChange={this.onChange} />
                                <br/>
                                <Input type='text' name='description' id='description' placeholder={this.state.specItem.description} onChange={this.onChange} />
                                <br/>
                                <Input type='file' name='productImage' id='productImage' onChange={this.handleFile} />
                                <Button color='primary' style={{marginTop: '2rem'}} block>Update Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
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

export default connect(mapStateToProps, { getItems, deleteItem, updateItem })(ShoppingList);