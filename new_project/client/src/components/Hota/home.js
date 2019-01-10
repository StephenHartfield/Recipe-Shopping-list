import React, { Component } from 'react';
import './home.css'
import ImageTray from './imagepane.js'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { circle, Row, Col } from 'react-bootstrap'


const ftitle = ['Too Blessed and Too Anointed', 'Romans 12:12 Wooden Sign 12x12', 'I am with you always']
const stitle = ['Gone Fishing', 'Customizable 5x11" Wood Sign', 'Baby it\'s cold outside']
const first = [9, 5, 7];
const second = [8, 4, 11];

class Home extends Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div className='full'>
				<div className='container'>
				{/*<div>
					<input type="text" onChange={this.handleChange} value={this.state.input}/> <br/>
					<ul>{this.state.messages.map((m, i) => {return <li key={i}>{m}</li>})}</ul>
					<button onClick={this.submitMessage}>Submit</button>
				</div>*/}
			<div className='backgBorder'><div className='backg'></div></div>
					<div style={{marginBottom: '290px'}}>
						<h1 className="main">Heart of the Artisan</h1>
						<h2 className="secondary">- Exodus 31:6</h2>
					</div>
				</div>
					<div className='row' style={{backgroundColor: 'white', margin: '0px'}}>
						<div className="container" style={{paddingTop: '50px'}}>
							<h2 className="body">WELCOME</h2>
							<h2 className="body" style={{marginBottom: '50px'}}>Check out what's new.</h2>
							<div>
								<ImageTray titles={ftitle} photos={first} />
								<ImageTray titles={stitle} photos={second} />
							</div>
							<button className="buttonshop" style={{marginTop: '100px'}}> 
								<NavLink to='/Store' className='shoplink'>
									View Shop 	
								</NavLink>
							</button><br/><br/>
							<p style={{marginBottom: '0px'}}>Or</p><br/>
							<button className="buttonrequest shoplink" style={{marginBottom: '40px'}}> Request Custom Order </button>
						</div>
					</div>
			</div>
        )
    }
}

export default Home;