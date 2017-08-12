import React, { Component } from 'react';

// styled-component
import {
	AlertDiv,
	AlertFormDiv
} from './Alert.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// Libraries
import AlertContainer from 'react-alert'

import { CircleLoader } from 'react-spinners';


// ReactStrap
import { 
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col 
} from 'reactstrap';


export default class Alert extends Component {

	constructor(props){
		super(props);

		this.state = {
			posting: true,
			firstName: "",
			lastName: "",
			gender: "male"
		}
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 1000
    	);
    }


	alertOptions = {
	    offset: 14,
	    position: 'bottom left',
	    theme: 'light',
	    time: 5000,
	    transition: 'scale'
	}


	onSubmitForm(e){
		e.preventDefault();		
		if(this.state.firstName == ''
			|| this.state.lastName == ''){

			this.showError();
		}else{
			this.showSuccess();
		}
		return;
	}

	showInfo(){
		this.msg.show('Some text or component', {
	      time: 3000,
	      type: 'success',
	      icon: <img style={style.icon} src="http://www.iconsdb.com/icons/preview/royal-blue/info-xxl.png" />
	    })
	}

	showError(){
		this.msg.show('Please fill all these fields', {
	      time: 3000,
	      type: 'success',
	      icon: <img style={style.icon} src="http://www.freeiconspng.com/uploads/alert-storm-warning-weather-icon--icon-search-engine-0.png" />
	    })
	}

	showSuccess(){
		this.msg.show('New user has been created', {
	      time: 3000,
	      type: 'success',
	      icon: <img style={style.icon} src="http://www.freeiconspng.com/uploads/success-icon-19.png" />
	    })
	}

	onChangeField(field, e){
		let newState = Object.assign({}, this.state);
		newState[field] = e.target.value;
	    this.setState(newState);
	}

  	render() {

  		if(this.state.posting){
 			return (
 				<div style={style.loader}>
 					<CircleLoader
 					  size={100}
			          color={'#2980b9'} 
			          loading={this.state.posting} 
			        />
 				</div>
 			)
 		}

    	return (
    		
      		<AlertDiv>
        		<PageHeader>
        			<PageTitle>Alert Service</PageTitle>
        		</PageHeader>

        		<FadeInDiv>
	        	<AlertFormDiv>
	        		<PageDesc>EX: 1</PageDesc>
		        	<Form onSubmit={this.onSubmitForm.bind(this)}>
						<FormGroup>
						    <Label for="FirstName">First Name</Label>
							<Input type="text" 
								   onChange={this.onChangeField.bind(this, 'firstName')}
							  	   name="firstName" 
							  	   id="FirstName" 
							  	   placeholder="" />
						</FormGroup>
						<FormGroup>
						    <Label for="LastName">Last Name</Label>
						    <Input type="text" 
						    	   onChange={this.onChangeField.bind(this, 'lastName')}
						           name="lastName" 
						           id="LastName" 
						           placeholder="" />
						</FormGroup>
						<FormGroup>
						    <Label htmlFor="gender">Gender</Label>
						    <Input type="select" 
						    	   onChange={this.onChangeField.bind(this, 'gender')}
						    	   name="select" 
						    	   id="gender">
						        <option value="male">Male</option>
						        <option value="female">Female</option>
						        <option value="intersex">Intersex</option>
						    </Input>
						</FormGroup>  
						<br/>
						<Button color="info" size="lg" block>Submit</Button>
					</Form>
				</AlertFormDiv>
				</FadeInDiv>

				<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
	      </AlertDiv>
	      
    );
  }
}


const style = {

	icon: {
		width:36,
		height:36
	},
	loader: {
		position: "absolute",
		top: "43%",
		left: "47%"
	}
}