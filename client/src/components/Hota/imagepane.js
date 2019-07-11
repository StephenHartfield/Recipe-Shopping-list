import React, { Component } from 'react';
import { photos } from './photos.js'
import { Col, Row } from 'reactstrap'
import './home.scss'

class ImageTray extends Component {
   

    render() {
        return (
            <div>
				<Row>
					<Col md={4} className='pic'>
						<img src={photos(this.props.photos[0])} title={this.props.titles[0]} className='imgS1' alt='' />
					</Col>
					<Col md={4} className='pic'>
						<img src={photos(this.props.photos[1])} title={this.props.titles[1]} className='imgS1' alt='' />
					</Col>
					<Col md={4} className='pic'>
						<img src={photos(this.props.photos[2])} title={this.props.titles[2]} className='imgS1' alt='' />
					</Col>
				</Row>
			</div>
        );
    }
}

export default ImageTray;