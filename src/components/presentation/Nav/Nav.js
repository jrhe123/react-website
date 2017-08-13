import React, { Component } from 'react';

// Libraries
import BurgerMenu from 'react-burger-menu';

// Router
import {Link} from 'react-router';

// Components
import MenuWrap from './MenuWrap';

// style
import './Nav.css';


class Nav extends Component{

	constructor (props) {
	    super(props);
	    this.state = {
	      currentMenu: 'scaleRotate',
	      side: 'left',
	    };
	}  

	getMenu() {
	    const Menu = BurgerMenu['scaleRotate'];
	    let jsx = (
	        <MenuWrap wait={20}>
	          <Menu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
	            <Link to="/">Home</Link>
	            <Link to="/chart">Chart Diagram</Link>
	            <Link to="/alert">Alert Service</Link>
	            <Link to="/countup">Count Module</Link>
	            <Link to="/cc">Credit Card</Link>
	            <Link to="/motion">Motion Effect</Link>
	            <Link to="/collapseAccordion">Collapse Accordion</Link>
	            <Link to="/uimask">Masked UI</Link>
	            <Link to="/datepicker">Date Picker</Link>
	            <Link to="/signature">Signature Pad</Link>
	            <Link to="/masonry">Masonry</Link>
	            <Link to="/camera">Web Camera Pic</Link>
	            <Link to="/mobile">Mobile Camera Pic</Link>
	            <Link to="/scroll">Infinite Scroll</Link>
	            <Link to="/modal">Modal Service</Link>
	          </Menu>
	        </MenuWrap>
	    );
	    return jsx;
	}

	render(){
		return (
			<div id="outer-container" style={{height: '100vh'}}>
		        {this.getMenu()}
		        <main id="page-wrap">
		        	{this.props.children}
		        </main>
		    </div>
		)
	}
}

export default Nav;