import React, { Component } from 'react';

export default class Cinema extends Component {

	constructor(){

		super();

		this.state = {

		}	
	}

 	render() {

    	return (
    		<div>
    			<img style={style.ipad} src={require('../../../assets/ipad.png')} />
    			<img style={style.cinema} src={require('../../../assets/coffee.gif')} />
      		</div>
    	);
  	}
}

const style = {

	ipad: {
		position: "absolute",
		display: "block",
		width: 400,
		height:250,
		right: 20,
		bottom: 0,
		transform: "rotate(10deg)",
    	transformOrigin: "20% 40%",
    	zIndex: 99,
	},
	cinema: {
		position: "absolute",
		display: "block",
		width: 327,
		height: 219,
		right: 57,
		bottom: 11,
		zIndex: 99,
		transform: "rotate(10deg)",
    	transformOrigin: "20% 40%",
    	boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
	}
}
