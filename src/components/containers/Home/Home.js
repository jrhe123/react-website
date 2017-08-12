import React, { Component } from 'react';


// styled-component
import {HomeDiv} from './Home.style';


// Libraries
import { ClimbingBoxLoader } from 'react-spinners';


export default class Home extends Component {

	constructor(){
		super();

		this.state = {
			posting: true
		}		
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 2000
    	);
    }

 	render() {

 		if(this.state.posting){
 			return (
 				<div>
 					<ClimbingBoxLoader
 					  size={30}
			          color={'#2980b9'} 
			          loading={this.state.posting} 
			        />
 				</div>
 			)
 		}
    	return (
      		<HomeDiv>
       	 		My Home
      		</HomeDiv>
    	);
  	}
}
