import React, { Component } from 'react';

// styled-component
import {
	UIMaskDiv,

} from './UIMask.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// Libraries
import InputMask from 'react-input-mask';


import { BounceLoader } from 'react-spinners';


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


// sweet alert
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';


export default class UIMask extends Component {

	constructor(props){
		super(props);

		this.state = {
			posting: true,
			mobile: "",
			dob: "",
			cc: "",
			show: false
		}
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 2000
    	);
    }

	onSubmitForm(e){
		e.preventDefault();		
		this.setState({
			show: true
		})
		return;
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
 					<BounceLoader
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
    				<PageTitle>Masked UI</PageTitle>
    			</PageHeader>

    			<FadeInDiv>
    			<UIMaskDiv>
    				<PageDesc>EX. 5</PageDesc>

    				<SweetAlert
				        show={this.state.show}
				        type="success"
				        title="Success"
				        text="Awesome!"
				        onConfirm={() => this.setState({ show: false })}
				    />

    				<Form onSubmit={this.onSubmitForm.bind(this)}>
						<FormGroup>
						    <Label for="mobile">Mobile</Label>
							<InputMask mask="+1(999)999-9999" 
							 			maskChar=" "
							 			className="form-control"
							 			type="text" 
								   		onChange={this.onChangeField.bind(this, 'mobile')}
							  	   		name="mobile" />  	   
						</FormGroup>
						<FormGroup>
						    <Label for="dob">DOB</Label>
						    <InputMask mask="99-99-9999" 
							 			className="form-control"
							 			type="text" 
								   		onChange={this.onChangeField.bind(this, 'dob')}
							  	   		name="dob" /> 
						</FormGroup>
						<FormGroup>
						    <Label for="cc">Credit Card</Label>
						    <InputMask mask="9999-9999-9999-9999" 
							 			className="form-control"
							 			type="text" 
								   		onChange={this.onChangeField.bind(this, 'cc')}
							  	   		name="cc" /> 
						</FormGroup>
						<br/><br/>
						<Button color="info" size="lg" block>Submit</Button>
					</Form>

    			</UIMaskDiv>
    			</FadeInDiv>

    			
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