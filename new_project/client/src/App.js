import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/navhead.js'
import ShoppingList from './components/shoppinglist.js'

import { Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}> 
	      <div className="App">
	      <AppNavbar/>
	      <ShoppingList/>
	      </div>
	    </Provider>
    );
  }
}

export default App;