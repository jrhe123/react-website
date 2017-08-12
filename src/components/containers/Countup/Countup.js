import React, { Component } from 'react';

// styled-component
import {
	CountupDiv,
	CountupDesc,
	FlexBox,
	FlexItem,
} from './Countup.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';

// Libraries
import CountUp, { startAnimation } from 'react-countup';


import { DotLoader } from 'react-spinners';


// Confirm box
import ReactConfirmAlert, { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 


// Style
import './Countup.css';


export default class Countup extends Component {

	constructor(props){
		super(props);

		this.state = {
			posting: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 2000
    	);
    }

	onStart(){
		//console.log('start timer');
	}

	onComplete(){

		//console.log('count up ends');
		confirmAlert({
	      title: 'React Web App',
	      message: '',
	      childrenElement: () => <div style={style.text}><p>Author: Roy Test</p><p>Title: Full Stack Dev</p></div>,
	      confirmLabel: 'Confirm',
	      cancelLabel: 'Cancel',
	      onConfirm: () => {

	      },
	      onCancel: () => {

	      },
	    })
	}

  	render() {

  		if(this.state.posting){
 			return (
 				<div style={style.loader}>
 					<DotLoader
 					  size={100}
			          color={'#2980b9'} 
			          loading={this.state.posting} 
			        />
 				</div>
 			)
 		}

    	return (
    		<div>
	    		<PageHeader>
	    			<PageTitle>Count up & confirm box</PageTitle>
	    		</PageHeader>

	    		<FadeInDiv>
	      		<CountupDiv>
	      			<PageDesc>EX. 2</PageDesc>
	      			<FlexBox>
		      			<FlexItem>
			      			<CountUp
							    className="custom-count"
							    start={0}
							    end={169}
							    duration={5}
							    useEasing={true}
							    separator=" "
							    decimal=","
							    prefix=""
							    suffix=""
							    onComplete={this.onComplete.bind(this)}
							    onStart={this.onStart.bind(this)}
							/>
							<CountupDesc>Coconut</CountupDesc>
						</FlexItem>

						<FlexItem>
							<CountUp
							    className="custom-count"
							    start={0}
							    end={89}
							    duration={5}
							    useEasing={true}
							    separator=" "
							    decimal=","
							    prefix=""
							    suffix=""
							/>
							<CountupDesc>Coke</CountupDesc>
						</FlexItem>

						<FlexItem>
							<CountUp
							    className="custom-count"
							    start={0}
							    end={27}
							    duration={5}
							    useEasing={true}
							    separator=" "
							    decimal=","
							    prefix=""
							    suffix=""
							/>
							<CountupDesc>Coffee</CountupDesc>
						</FlexItem>
					</FlexBox>
	      		</CountupDiv>
	      		</FadeInDiv>
	      		
      		</div>
    	);
 	}
}


const style = {

	text: {
		fontSize: 22,
		color: "#000",
		padding: "12px 0 12px 12px"
	},
	loader: {
		position: "absolute",
		top: "43%",
		left: "47%"
	}
}