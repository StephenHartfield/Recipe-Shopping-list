import React, { Component } from 'react';
import LinksExit from './linksexit.js'

class Store extends Component {
   	constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        document.title = 'Heart of the Artisan | Store'
    }

    render() {
        return (
            <div>
            	<div style={{padding: '200px', textAlign: 'center', backgroundColor: 'gray'}}>
            		<h1 style={{backgroundColor: 'white'}}>Super Awesome Store!</h1>
	            	<h2 style={{backgroundColor: 'orange'}}>Coming Soon!</h2>
            	</div>
            	<LinksExit />
            </div>
        );
    }
}

export default Store;
