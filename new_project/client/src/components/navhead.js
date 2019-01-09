import React, { Component } from 'react';
// import {photos} from './photos'
import './navhead.css'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import {photos} from '../components/Hota/photos.js'



let tabStyle = {
	color: 'pink',
	fontWeight: 'bold',
	fontSize: '17px'
}

class AppNavbar extends Component {
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		}
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	
	render(){
		return (			
		<div>  
			<Navbar expand='sm' color='light' light className='topb'>
				<NavbarBrand href='/home' style={{width: '100px', display: 'inline'}}><img src={photos(18)} className='thisimg' alt="" /></NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className='ml-auto firstT' navbar>
						<NavItem className='tab'>
							<NavLink to='/home' activeStyle={tabStyle}> Home </NavLink>
						</NavItem>
						<NavItem className='tab'>
							<NavLink to='/About' activeStyle={tabStyle}> About </NavLink>
						</NavItem>
						<NavItem className='tab'>
							<NavLink to='/Store' activeStyle={tabStyle}> Store </NavLink>
						</NavItem>
						<NavItem className='tab'>
							<NavLink to='/Cart' activeStyle={tabStyle}> Cart </NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
				
				{/*<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className='ml-auto' navbar>	
						<NavItem >
							<li style={{width: '100px', display: 'inline'}}>
								<NavLink to='/'>	
									<img src={photos(17)} className='thisimg' />
								</NavLink>
							</li>
							<li className='tab'>
								<a> Cart </a></li>
							<li className='tab'>
								<NavLink to='/store' activeStyle={tabStyle}> Store </NavLink>
							</li>
							<li className='tab'>
								<NavLink to='/about' activeStyle={tabStyle}> About </NavLink>
							</li>
							<li className='tab'>
								<NavLink to='/home' activeStyle={tabStyle}> Home </NavLink>
							</li>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			{this.props.showButton && <div>
				<NavbarToggler onClick={this.toggle} className='ham glyphicon glyphicon-menu-hamburger'>
				</NavbarToggler>
			{this.state.toggle && <div>
				<Collapse className='secondNav'>
					<NavItem className='secondList'>
						<li className='tab2'>
							<NavLink to='/home' activeStyle={tabStyle}> Home </NavLink>
						</li>
						<li className='tab2'>
							<NavLink to='/about' activeStyle={tabStyle}> About </NavLink>
						</li>
						<li className='tab2'>
							<NavLink to='/design' activeStyle={tabStyle}> Design </NavLink>
						</li>
						<li className='tab2'>
							<a> Cart </a>
						</li>
					</NavItem>
				</Collapse>
			</div>*/}
		</div>
		);
	}		
}

export default AppNavbar;