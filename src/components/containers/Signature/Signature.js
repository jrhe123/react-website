import React, { Component } from 'react';

// styled-component
import {
	SignatureDiv,
} from './Signature.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// Libraries
import SignaturePad from'react-signature-pad';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
// optional - you can choose the effect you want
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';



import { RingLoader } from 'react-spinners';



// style
import './Signature.css';


// ReactStrap
import { 
	Button
} from 'reactstrap';


export default class Signature extends Component {
	
	constructor(props){
		super(props);

		this.state = {
			posting: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 1500
    	);
    }

	clear(){
		let signature = this.refs.mySignature;
		signature.clear();

		Alert.info('<h4>Signature has been removed.</h4>', {
            position: 'top-right',
            effect: 'slide',
            html: true
        });
	}

	upload(){
		let signature = this.refs.mySignature;

		if(signature.isEmpty()){
			Alert.error('Signature cannot be empty!', {
	            position: 'top',
	            effect: 'stackslide'
	        });
		}else{
			Alert.success('Signature has been uploaded!', {
	            position: 'top',
	            effect: 'stackslide'
	        });
		}
	}

  	render() {

  		if(this.state.posting){
 			return (
 				<div style={style.loader}>
 					<RingLoader
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
      				<PageTitle>Signature Pad</PageTitle>
      			</PageHeader>

      			<FadeInDiv>
      			<SignatureDiv>
      				<PageDesc>EX. 7</PageDesc>

      				<div style={style.pad}>
      					<SignaturePad 
      						ref="mySignature" />
      				</div>	
      				<div style={{marginTop:18}}>
      					<Button style={style.btn} 
      							color="primary"
      							onClick={this.clear.bind(this)}>Clear</Button>
      					<Button style={style.btn} 
      							color="info"
      							onClick={this.upload.bind(this)}>Upload</Button>
      				</div>
      			</SignatureDiv>
      			</FadeInDiv>

      			<Alert stack={true} timeout={3000} />
      		</div>
    	);
  	}
}

const style = {

	pad: {
		boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
	},

	btn: {
		border: "none",
		marginRight: 6
	},

	loader: {
		position: "absolute",
		top: "43%",
		left: "47%"
	}
}