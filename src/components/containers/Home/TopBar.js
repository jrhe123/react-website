import React, { Component } from 'react';


// style
import './TopBar.css';

export default class TopBar extends Component {

	constructor(){

		super();

		this.state = {

		}	
	}

 	render() {

    	return (
    		<div className="topBar">
    			<li className="item">Sign Up</li>
    			<li className="item">Log In</li>
      		</div>
    	);
  	}
}
