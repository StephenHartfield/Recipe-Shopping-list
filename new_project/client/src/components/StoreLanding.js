import React, { Component } from 'react';
import ItemModal from './itemModal.js';
import ShoppingList from './shoppinglist.js'
import { Provider} from 'react-redux';
import store from '../store.js';
import {Container} from 'reactstrap'
import './storelanding.css'

class StoreLand extends Component {
   constructor(props) {
        super(props);
    }

    componentDidMount() {
		window.scrollTo(0, 0);
		document.title = 'Heart of the Artisan | Store'
	}

    render() {
        return (
         <Provider store={store}> 
	      <div className="App">
		      <ItemModal />
		      <ShoppingList />
	      </div>
	    </Provider>
        );
    }
}

export default StoreLand;
