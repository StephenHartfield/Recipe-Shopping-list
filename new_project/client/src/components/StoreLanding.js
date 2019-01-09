import React, { Component } from 'react';
import ItemModal from './itemModal.js';
import ShoppingList from './shoppinglist.js'
import { Provider} from 'react-redux';
import store from '../store.js';
import {Container} from 'reactstrap'

class StoreLand extends Component {
   constructor(props) {
        super(props);
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
