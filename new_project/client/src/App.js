import React, { Component } from 'react';
import './App.css';
import AppNavbar from './components/navhead.js'
import StoreLand from './components/StoreLanding.js'
import { Container } from 'reactstrap';
//on imports curly braces are needed around imports that aren't the default exports. 
// Provider isn't the default export so must have curly braces
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Hota/home';
import { photos } from './components/Hota/photos';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './components/Hota/about.js'
import LinksExit from './components/Hota/linksexit.js'

class App extends Component {
    render() {
        return (
            <Provider store={store}> 
	    	<BrowserRouter>
				<div>	
					<AppNavbar true='true'/>
						<div>			
							<Switch>
								<Route path='/home' component={Home} exact />
								<Route path='/store' component={StoreLand} />
								<Route path='/about' component={About} />
								<Route component={Home} />
							</Switch>
						</div>
						<LinksExit />
				</div>
			</BrowserRouter>
	    </Provider>
        );
    }
}

export default App;