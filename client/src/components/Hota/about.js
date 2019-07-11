import React, { Component } from 'react';
import { photos } from './photos.js'
import './about.css'
import { Row, Col, Container } from 'reactstrap'

class About extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Heart of the Artisan | About'
    }
    render() {
        return (
            <div className = 'aboutfull'>
	            <Container>
					<Row>
						<Col className='pic-container' md={{offset:1, size: 5}}>
							<img src={photos(19)} alt="" className='aboutimage'/>
						</Col>
						<Col className='pic-container' md={5}>
							<img src={photos(20)} className='aboutimage' alt="about Margo"/>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<div className="info" >
								<h1>I love creating hand lettered signs for people!</h1>
								<p>Hi! My name is Margo! I've always loved the beautiful art of calligraphy. 
								I also love Jesus! I know that His words have the power to change things!</p>
								<p>Recently, I've put the two together, and created Heart of the Artisan.</p>
							</div>
						</Col>
					</Row>
            	</Container>
			</div>
        );
    }
}

export default About;