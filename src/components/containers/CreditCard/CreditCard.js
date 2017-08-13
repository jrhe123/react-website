import React, { Component } from 'react';

// styled-component
import {
	CreditCardDiv,
	CreditCardFormDiv
} from './CreditCard.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


// Libraries
import { CircleLoader } from 'react-spinners';

import CardReactFormContainer from 'card-react';


// style
import './CreditCard.css';


export default class CreditCard extends Component {

	constructor(props){
		super(props);

		this.state = {
			posting: true
		}
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 1000
    	);
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
    		
      		<CreditCardDiv>
        		<PageHeader>
        			<PageTitle>Credit Card</PageTitle>
        		</PageHeader>

        		<FadeInDiv>
	        	<CreditCardFormDiv>
	        		<PageDesc>EX: </PageDesc>


	        		<div id="card-wrapper"></div>

		        	<CardReactFormContainer
					  container="card-wrapper"
					  formInputsNames={
					    {
					      number: 'CCnumber', 
					      expiry: 'CCexpiry',
					      cvc: 'CCcvc', 
					      name: 'CCname'
					    }
					  }
					  initialValues= {
					    {
					      number: '4242424242424242', 
					      cvc: '123',
					      expiry: '17/12', 
					      name: 'Roy Test' 
					    }
					  }
					  classes={
					    {
					      valid: 'valid-input',
					      invalid: 'invalid-input'
					    }
					  }
					  formatting={true} 
					>
						<form style={{margin:"20px auto", textAlign: "center"}}>
						    <input placeholder="Full name" type="text" name="CCname" />
						    <input placeholder="Card number" type="text" name="CCnumber" />
						    <input placeholder="MM/YY" type="text" name="CCexpiry" />
						    <input placeholder="CVC" type="text" name="CCcvc" />
						</form>

					</CardReactFormContainer>
					


				</CreditCardFormDiv>
				</FadeInDiv>

	      </CreditCardDiv>
	      
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