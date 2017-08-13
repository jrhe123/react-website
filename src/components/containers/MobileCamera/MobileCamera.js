import React, { Component } from 'react';

// styled-component
import {
	MobileCameraDiv,
} from './MobileCamera.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// Libraries
import FileInput from 'react-file-input';

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

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



import { RiseLoader } from 'react-spinners';



// style
import './MobileCamera.css';


export default class MobileCamera extends Component {


	constructor(props) {
	    super(props);

	    this.state = {
	    	posting: true,
	      percent: 0
	    }
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 1500
    	);
    }

	handleChange(event){
	    //console.log('Selected file:', event.target.files[0]);
	    if(event.target.files.length > 0){
	    	Alert.info('Image has been saved', {
		        position: 'bottom',
		        effect: 'bouncyflip'
		    });
		    this.setState({ percent: 100 });
	    }else{
	    	Alert.error('File is not valid', {
		        position: 'bottom',
		        effect: 'bouncyflip'
		    });
		    this.setState({ percent: 0 });
	    }
	}

  	render() {

  		if(this.state.posting){
 			return (
 				<div style={style.loader}>
 					<RiseLoader
 					  size={20}
			          color={'#2980b9'} 
			          loading={this.state.posting} 
			        />
 				</div>
 			)
 		}

    	return (
      		<div style={{background:"#fff"}}>
      			<PageHeader>
      				<PageTitle>Mobile Camera Pic</PageTitle>
      			</PageHeader>

      			<FadeInDiv>
      			<MobileCameraDiv>
      				<PageDesc>EX. 10</PageDesc>
      				<h3 style={{textAlign:"center", textShadow:"none", color:"#000"}}>Click & upload a image</h3>
      				<form style={style.form}>
      					<img style={style.img} src="https://cdn1.iconfinder.com/data/icons/web-interface-part-2/32/cloud-upload-512.png" />
				        <div className="img-wrapper">	
				        	<FileInput name="myImage"
				                   accept=".png,.jpg"
				                   placeholder="My Image"
				                   className="mobile-input"
				                   onChange={this.handleChange.bind(this)} />
				    	</div>

				    	<Progress
						  percent={this.state.percent}
						  status="success"
						/>
				    </form>
      			</MobileCameraDiv>
      			</FadeInDiv>



      			<Alert stack={true} timeout={3000} />
      		</div>
    	);
  	}
}

const style = {

	form: {
		width: 200,
		height: 200,
		margin: "0 auto",
		marginTop: 50,
		position: "relative"
	},
	img: {
		width: 200,
		height: 200,
	},
	loader: {
		position: "absolute",
		top: "43%",
		left: "47%"
	}
}