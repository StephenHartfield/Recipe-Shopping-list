import React, { Component, PropTypes } from 'react';
import './linksexit.css'

class LinksExit extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const fburl = 'www.facebook.com/margogardner1?ref=br_rs';
        return (
            <div className='container-fluid bg'>
		        <div className='links'>
					<a href={'http://'+fburl} title={fburl}>
						<i className="fab fa-facebook-square faceicon"></i>
					</a>
					<button className="btn etsy">
						<a href="https://www.etsy.com/shop/heartoftheartisan" title='www.etsy.com/shop/heartoftheartisan'>Etsy</a>
					</button>
					<a href='https://www.instagram.com/heartoftheartisan' title='www.instagram.com/heartoftheartisan'>
						<i className="fab fa-instagram instagram"></i>
					</a>
				</div>
			</div>
        );
    }
}

export default LinksExit;