import React, { Component } from 'react';
import { photos } from './photos.js'
import './about.css'
import { Row, Col } from 'reactstrap'

class About extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Heart of the Artisan | About'
    }
    render() {
        return (
            <div className = 'aboutfull'>
        <div className="container" style={{padding: '100px 0 150px 0'}}>
						<Row>
							<Col md={{offset:1, size: 5}} style={{height: '400', width: '600px'}}>
								<img src={photos(19)} alt="" className='aboutimage'/>
							</Col>
							<Col md={5} style={{height: '400px', width: '600px'}}>
								<img src={photos(20)} className='aboutimage' alt="picture of Margo"/>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<div className="info" style={{padding: '20px'}} >
									<h1>I love creating hand lettered signs for people!</h1>
									<p>Hi! My name is Margo! I've always loved the beautiful art of calligraphy. 
									I also love Jesus! I know that His words have the power to change things!</p>
									<p>Recently, I've put the two together, and created Heart of the Artisan.</p>
								</div>
							</Col>
						</Row>
				</div> 
				</div>
        );
    }
}

export default About;