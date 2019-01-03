import React, { Component } from 'react';
// import {photos} from './photos'
// import './Here.css'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container} from 'reactstrap';
// import {NavLink} from 'react-router-dom'



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
			<Navbar expand='sm' color='light' light className='mb-5'>
				<Container>
					<NavbarBrand href='/'> Shopping List </NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className='ml-auto' navbar>
							<NavItem>
								<NavLink href='/home' activeStyle={tabStyle}> Home </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/About' activeStyle={tabStyle}> About </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/Store' activeStyle={tabStyle}> Store </NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='/Cart' activeStyle={tabStyle}> Cart </NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
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