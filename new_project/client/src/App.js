import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/navhead.js'
import ShoppingList from './components/shoppinglist.js'
import ItemModal from './components/itemModal.js'
import { Container } from 'reactstrap';
//on imports curly braces are needed around imports that aren't the default exports. 
// Provider isn't the default export so must have curly braces
import { Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}> 
	      <div className="App">
	      <AppNavbar/>
	      <Container>
		      <ItemModal />
		      <ShoppingList />
	      </Container>
	      </div>
	    </Provider>
    );
  }
}

export default App;