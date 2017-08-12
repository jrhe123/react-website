import React, { Component } from 'react';

// styled-component
import {
	ModalDiv,
} from './Modal.style';

import {
	FadeInDiv,
	PageHeader,
	PageTitle,
	PageDesc
} from '../../../theme/types';


import { RingLoader } from 'react-spinners';


// Libraries
import {
  Modal as M,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';


export default class Modal extends Component {
	
	constructor(props){
		super(props);

		this.state = {
			posting: true,
			isOpen: false
		}
	}

	componentDidMount() {
		setTimeout(() => {
    		this.setState({posting: false}); }, 1500
    	);
    }

    openModal = () => {
	  this.setState({
	    isOpen: true
	  });
	};

	hideModal = () => {
	  this.setState({
	    isOpen: false
	  });
	};

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
      				<PageTitle>Modal</PageTitle>
      			</PageHeader>

      			<FadeInDiv>
      			<ModalDiv>
      				<PageDesc>EX. 12</PageDesc>
      				<br/><br/>
      				<button className="btn btn-block btn-info"
      						onClick={this.openModal.bind(this)}>Open Modal</button>

      				<M isOpen={this.state.isOpen}>
					  <ModalHeader>
					    <ModalClose onClick={this.hideModal.bind(this)}/>
					    <ModalTitle>Welcom Roy</ModalTitle>
					  </ModalHeader>
					  <ModalBody>
					    <p>Ab ea ipsam iure perferendis! Ad debitis dolore excepturi
					      explicabo hic incidunt placeat quasi repellendus soluta,
					      vero. Autem delectus est laborum minus modi molestias
					      natus provident, quidem rerum sint, voluptas!</p>
					  </ModalBody>
					  <ModalFooter>
					    <button className='btn btn-default' onClick={this.hideModal.bind(this)}>
					      Close
					    </button>
					    <button className='btn btn-primary'>
					      Save
					    </button>
					  </ModalFooter>
					</M>
      				
      			</ModalDiv>
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