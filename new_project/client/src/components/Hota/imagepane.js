import React, { Component } from 'react';
import {photos} from './photos.js'
import './home.css'

class ImageTray extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>
				<div className='pic col-md-4 col-sm-4 col-xs-offset-2 col-xs-10'>
					<img src={photos(this.props.photos[0])} title={this.props.titles[0]} className={this.props.styling[0]} />
				</div>
				<div className='pic col-md-4 col-sm-4 col-xs-offset-2 col-xs-10'>
					<img src={photos(this.props.photos[1])} title={this.props.titles[1]} className={this.props.styling[1]} />
				</div>
				<div className='pic col-md-4 col-sm-4 col-xs-offset-2 col-xs-10'>
					<img src={photos(this.props.photos[2])} title={this.props.titles[2]} className={this.props.styling[2]} />
				</div>
			</div>
		);	
	}
}

export default ImageTray;