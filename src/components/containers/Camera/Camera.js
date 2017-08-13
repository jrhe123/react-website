import React, { Component } from 'react';

// styled-component
import {
	CameraDiv,
} from './Camera.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// Libraries
import Webcam from 'react-webcam';

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


import ProgressBar from'react-progress-bar-plus';
import 'react-progress-bar-plus/lib/progress-bar.css';


import { MoonLoader } from 'react-spinners';


// style
import './Camera.css';


export default class Signature extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			posting: true,
			percent: -1,
		    autoIncrement: false,
		    intervalTime: 200
		}
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 1000
    	);
    }


	setRef = (webcam) => {
	    this.webcam = webcam;
	}
	 
	capture = () => {
	    const imageSrc = this.webcam.getScreenshot();

	    Alert.info('Image has been saved', {
	        position: 'top-left',
	        effect: 'bouncyflip'
	    });

	    this.setState({
	    	percent: 100,
	    })
	};

  	render() {

  		if(this.state.posting){
 			return (
 				<div style={style.loader}>
 					<MoonLoader
 					  size={100}
			          color={'#2980b9'} 
			          loading={this.state.posting} 
			        />
 				</div>
 			)
 		}

    	return (
      		<div style={{background:"#fff"}}>
      			<ProgressBar percent={this.state.percent}
      						 spinner={false}
      						  />

      			<PageHeader>
      				<PageTitle>WebCamera Pic</PageTitle>
      			</PageHeader>

				<FadeInDiv>
      			<CameraDiv>
      				
      				<PageDesc>EX. 9</PageDesc>
      				<Webcam
			          audio={false}
			          height={400}
			          ref={this.setRef}
			          screenshotFormat="image/jpeg"
			          width={600}
			        />

			        <div style={{width:400, margin:"24px auto"}}>
			        <button className="btn btn-primary btn-block"
			                onClick={this.capture.bind(this)}>Capture photo</button>
      				</div>
      			</CameraDiv>
      			</FadeInDiv>

      			<Alert stack={true} timeout={3000} />
      		</div>
    	);
  	}
}

const style = {

	loader: {
		position: "absolute",
		top: "43%",
		left: "47%"
	}
}