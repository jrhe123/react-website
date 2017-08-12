import React, { Component } from 'react';

// styled-component
import {
	DatepickerDiv
} from './Datepicker.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// bootstrap
import { 
	Jumbotron
} from 'reactstrap';


// Alert
import AlertContainer from 'react-alert'


// Libraries
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


import { PacmanLoader } from 'react-spinners';


export default class Datepicker extends Component {

	constructor (props) {
	    super(props)
	    this.state = {
	      posting: true,	
	      startDate: moment()
	    };
	    this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 2000
    	);
    }

	alertOptions = {
	    offset: 14,
	    position: 'bottom left',
	    theme: 'light',
	    time: 5000,
	    transition: 'scale'
	}

	handleChange(date) {
	    this.setState({
	      startDate: date
	    });

	    this.msg.show("You picked: "+moment(date).format('YYYY-MM-DD'), {
	      time: 3000,
	      type: 'success',
	      icon: <img style={style.icon} src="http://www.freeiconspng.com/uploads/success-icon-19.png" />
	    })
	}

  	render() {

  		if(this.state.posting){
 			return (
 				<div style={style.loader}>
 					<PacmanLoader
			          color={'#2980b9'} 
			          loading={this.state.posting} 
			        />
 				</div>
 			)
 		}

    	return (
    		<div>
	    		<PageHeader>
	    			<PageTitle>Date Picker Example</PageTitle>
	    		</PageHeader>
	      		
	      		<FadeInDiv>
	      		<DatepickerDiv>
	      			<PageDesc>EX. 6</PageDesc>

				    <h3 style={style.subtitle}>Date of Birth</h3><br/>  
				    <div className="form-group">  
					    <DatePicker
			      			className="form-control"
						    selected={this.state.startDate}
						    onChange={this.handleChange}
						/>
					</div>
	      		</DatepickerDiv>
	      		</FadeInDiv>
	      		<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
      		</div>
    	);
 	}
}

const style = {

	subtitle: {
		marginTop:36,
		color: "#000",
		textShadow: "none"
	},

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