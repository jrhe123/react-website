import React, { Component } from 'react';


// styled-component
import {
	TopContainerDiv,
	ContainerDiv
} from './Home.style';

import {
	FadeInDiv,
	HomeBanner,
	HomeContent
} from '../../../theme/types';


// components
import TopBar from './TopBar';
import Cinema from './Cinema';
import Cards from './Cards';


// Libraries
import { ClimbingBoxLoader } from 'react-spinners';
import Typist from 'react-typist';


// style
import './Home.css';


export default class Home extends Component {

	constructor(){

		super();

		this.state = {
			posting: true,
			text: 'Hello World! Get Started!',
			textIdx: 0,
			textArr: [
				'Hello World! Get Started!',
				'Roy Test, This is my react & redux demo.',
				"It's connected to My NodeJS Restful API.",
				'I am a Full Stack Developer.',
				"Awesome! let's see more info in the burger menu!",
			],
			showText: true
		}	
	}

	componentDidMount() {	

		setTimeout(() => {
    		this.setState({posting: false}); 
    	}, 2000);
    }

    onTypeDone(){

    	setTimeout(() => {
	    	this.setState({
	    		showText: false,
	    		textIdx: this.state.textIdx < 4 ? this.state.textIdx + 1 : 0
	    	})

	    	setTimeout(() => {
	    		this.setState({
	    			text: this.state.textArr[this.state.textIdx],
	    			showText: true,
	    		}); 
	    	}, 200);
    	}, 1000);
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

 		const typer = (this.state.showText) 
				? (<div>
					<Typist className="Typer" avgTypingDelay={100} onTypingDone={this.onTypeDone.bind(this)}>{this.state.text}</Typist>
				   </div>) 
				: null;	

    	return (
    		<div>
    			<FadeInDiv>
	    			
		    			<HomeBanner>
		    				<TopContainerDiv>
			    				{typer}
			    				<Cinema />
			    				<TopBar />
		    				</TopContainerDiv>
		    			</HomeBanner>    			

		    			<HomeContent>
			    			<ContainerDiv>
			    				<div className="banner">My Tools</div>
			   			    	<Cards />  					      		
			      			</ContainerDiv>
		      			</HomeContent>
	      		</FadeInDiv>
      		</div>
    	);
  	}
}
