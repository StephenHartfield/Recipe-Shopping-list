import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemaction.js';

//form will always a piece of state in component, not redux
//this component could be considered a container, since it is solely redux. normally it might be in a containers folder
class ItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: '',
            price: '',
            description: '',
            productImage: null
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFile = (e) => {
        this.setState({
            productImage: e.target.files[0]
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            productImage: this.state.productImage
        }
        //newItem.append('file', this.state.productImage, this.state.productImage.name)

        //Add item via addItem action
        this.props.addItem(newItem);

        //Close the modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button style={{marginBottom: '2rem', margin: '30px 0 0 50px'}} onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add To Shopping List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Item</Label>
                                <Input type='text' name='name' id='item' placeholder='Add Item Name' onChange={this.onChange} />
                                <br/>
                                <Input type='number' step='0.01' name='price' id='price' placeholder='Add Price' onChange={this.onChange} />
                                <br/>
                                <Input type='text' name='description' id='description' placeholder='Add an Amazing Description' onChange={this.onChange} />
                                <br/>
                                <Input type='file' name='productImage' id='productImage' onChange={this.handleFile} />
                                <div>{Math.round(this.state.loading, 2)} %</div>
                                <Button color='dark' style={{marginTop: '2rem'}} block>Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);