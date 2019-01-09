import React, { Component } from 'react';
import {photos} from './photos.js'
import './about.css'
import LinksExit from './linksexit.js'

class About extends Component {
	constructor(props){ 
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0, 0);
		document.title = 'Heart of the Artisan | About'
	}
	render(){
		return (
			<div className='aboutfull' style={{backgroundImage: `url(${photos(16)})`, backgroundSize: 'cover'}}>
				<div className="container" style={{padding: '200px 0 100px 0'}}>
						<div className="col-md-offset-4 col-md-4 col-xs-offset-3 col-xs-6">
							<img src={photos(20)} className='img img-responsive img-circle' alt="picture of Margo"/>
						</div>
						<div className="col-md-offset-3 col-md-6 col-xs-offset-3 col-xs-6 info" >
							<h1>I love creating hand lettered signs for people!</h1>
							<p>Hi! My name is Margo! I've always loved the beautiful art of calligraphy. 
							I also love Jesus! I know that His words have the power to change things!</p>
							<p>Recently, I've put the two together, and created Heart of the Artisan.</p>
						</div>
				</div>
				<LinksExit />
			</div>
		);
	}
}

export default About;