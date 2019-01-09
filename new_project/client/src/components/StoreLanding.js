import React, { Component, PropTypes } from 'react';
import itemModal from './itemModal.js';
import ShoppingList from './shoppinglist.js'

class StoreLand extends Component {
   constructor(props) {
        super(props);
    }

    render() {
        return (
           <div>
           <itemModal/>
           <ShoppingList/>	
           </div> 
        );
    }
}

export default StoreLand;
