import React, { Component } from 'react';
import './home.scss'
import axios from 'axios';
import ImageTray from './imagepane.js'
import { NavLink } from 'react-router-dom'
import { Row, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';


const ftitle = ['Too Blessed and Too Anointed', 'Romans 12:12 Wooden Sign 12x12', 'I am with you always']
const stitle = ['Gone Fishing', 'Customizable 5x11" Wood Sign', 'Baby it\'s cold outside']
const first = [9, 5, 7];
const second = [8, 4, 11];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            modal: false,
            name: '',
            email: '',
            message: '',
        })
        /*		this.state = ({
        			input: '',
        			messages: []
        		})
        	}
        	handleChange = (e) => {
        		this.setState({
        			input: e.target.value
        		})
        	}
        	submitMessage = () => {
        		this.setState({
        			input: '',
        			messages: [...this.state.messages, this.state.input]
        		})
        */
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Heart of the Artisan | Home'
    }

    modalToggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const reqItem = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        console.log(reqItem);
        axios.post('/send', reqItem);

        this.modalToggle();
    }

    render() {
        return (
            <div className='full'>
				<div className='container'>
				{/*<div>
					<input type="text" onChange={this.handleChange} value={this.state.input}/> <br/>
					<ul>{this.state.messages.map((m, i) => {return <li key={i}>{m}</li>})}</ul>
					<button onClick={this.submitMessage}>Submit</button>
				</div>*/}
			<Row>
				<div className='backgBorder'>
					<div className='backg'>
						<div>
							<h1 className="main">Heart of the Artisan</h1>
							<h2 className="secondary">- Exodus 31:6</h2>
						</div>
					</div>
				</div>
			</Row>
				</div>
					<div className='welcome'>
						<div className="container">
							<h2 className="body">WELCOME</h2>
							<h2 className="body" style={{marginBottom: '50px'}}>Check out what's new.</h2>
							<div>
								<ImageTray titles={ftitle} photos={first} />
								<ImageTray titles={stitle} photos={second} />
							</div>
							<button className="buttonshop"> 
								<NavLink to='/Store' className='shoplink'>
									View Shop 	
								</NavLink>
							</button><br/><br/>
							<p>Or</p>
							<button className="buttonrequest" onClick={this.modalToggle}> Contact Request </button>
						</div>
					</div>
					<Modal isOpen={this.state.modal} toggle={this.modalToggle}>
	                    <ModalHeader toggle={this.modalToggle}>
	                        Contact Request
	                    </ModalHeader>
	                    <ModalBody>
	                        <Form onSubmit={this.onSubmit}>
	                            <FormGroup>
	                                <Label for='name'>Name</Label>
	                                <Input type='text' name='name' id='name' placeholder='Your Name' onChange={this.onChange} />
	                                <br/>
	                                <Label for='email'>Email</Label>
	                                <Input type='text' name='email' id='email' placeholder='Your Email Address' onChange={this.onChange} />
	                                <br/>
	                                <Label for='message'>Request/Message</Label>
	                                <textarea rows='5' cols='63' name='message' id='message' placeholder='Your Request or Message' onChange={this.onChange} />
	                                <br/>
	                                <Button className='contact-btn' block>Send Request</Button>
	                            </FormGroup>
	                        </Form>
	                    </ModalBody>
                </Modal>
			</div>
        )
    }
}

export default Home;