import React, { Component } from 'react';


// Libraries
import {
  Modal as M,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';

import AlertContainer from 'react-alert'


// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




// style
import './TopBar.css';


// API
import {APIManager} from '../../../utils';


// redux
import actions from '../../../actions';
import { connect } from 'react-redux';


// cookie
import Cookies from 'universal-cookie';



class TopBar extends Component {

  alertOptions = {
      offset: 14,
      position: 'bottom left',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
  }

	constructor(){

		super();

		this.state = {
      isOpen: false,
      modalMode: 'SIGNUP',

      firstName: "",
      lastName: "",
      email: "",
      password: "",

      error: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
		}	
	}

  componentWillMount(){

    const cookies = new Cookies();
    const token = cookies.get('token');
    if(token != null){

      let params = {
        token: token
      }
      let url = 'https://blooming-mountain-19326.herokuapp.com/';
      APIManager.post(url + 'account/validate', params, (err, response) => {

        if(err){
          let msg = err.message || err;
          console.log(msg);
          return;
        }

        this.props.currentUserReceived(response.profile)
      })
    }
  }


  openModal = (type) => {

    this.setState({
      isOpen: true,
      modalMode: type
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };



  updateField(type, e){

    e.preventDefault();

    let updated = Object.assign({}, this.state);
    updated[type] = e.target.value;
    this.setState(updated);

    return;
  }




  logout(){
    const cookies = new Cookies();
    cookies.set('token', null, { path: '/' });
    this.props.currentUserReceived(null)
  }




  login(e){
    e.preventDefault();

    let updated = Object.assign({},this.state);
    let canSubmit = true;
    const obj = this.state;
    Object.keys(obj).forEach(function (key) {
      let item = obj[key];
      
      if(key == 'email'){
        if(item == ''){
          updated.error.email = 'Email is required';
          canSubmit = false;
        }else{
          updated.error.email = '';
        }
      }
      if(key == 'password'){
        if(item == ''){
          updated.error.password = 'Password is required';
          canSubmit = false;
        }else{
          updated.error.password = '';
        }
      }
    });

    this.setState(updated);

    if(canSubmit){
      let params = {
        email: this.state.email,
        password: this.state.password
      }
      let url = 'https://blooming-mountain-19326.herokuapp.com/';
      APIManager.post(url + 'account/login', params, (err, response) => {

        if(err){
          let msg = err.message || err;


          this.msg.show(msg, {
            time: 3000,
            type: 'success',
            icon: <img style={style.icon} src="http://www.freeiconspng.com/uploads/alert-storm-warning-weather-icon--icon-search-engine-0.png" />
          })
          return;
        }

        if(response.confirmation == 'success'){
          this.props.currentUserReceived(response.profile);

          const cookies = new Cookies();
          cookies.set('token', response.token, { path: '/' });

          this.setState({
            isOpen: false
          });

          this.msg.show('Welcome back! ' + response.profile.firstName, {
            time: 3000,
            type: 'success',
            icon: <img style={style.icon} src="http://www.freeiconspng.com/uploads/success-icon-19.png" />
          })
        }
      })

    }

    return;
  }




  register(e){
    e.preventDefault();

    let updated = Object.assign({},this.state);
    let canSubmit = true;
    const obj = this.state;
    Object.keys(obj).forEach(function (key) {
      let item = obj[key];
      
      if(key == 'firstName'){
        if(item == ''){
          updated.error.firstName = 'First Name is required';
          canSubmit = false;
        }else{
          updated.error.firstName = '';
        }
      }
      if(key == 'lastName'){
        if(item == ''){
          updated.error.lastName = 'Last Name is required';
          canSubmit = false;
        }else{
          updated.error.lastName = '';
        }
      }
      if(key == 'email'){
        if(item == ''){
          updated.error.email = 'Email is required';
          canSubmit = false;
        }else{
          updated.error.email = '';
        }
      }
      if(key == 'password'){
        if(item == ''){
          updated.error.password = 'Password is required';
          canSubmit = false;
        }else{
          updated.error.password = '';
        }
      }
    });


    this.setState(updated);

    if(canSubmit){
      let params = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }
      let url = 'https://blooming-mountain-19326.herokuapp.com/';
      APIManager.post(url + 'account/register', params, (err, response) => {

        if(err){
          let msg = err.message || err;
          

          this.msg.show(msg, {
            time: 3000,
            type: 'success',
            icon: <img style={style.icon} src="http://www.freeiconspng.com/uploads/alert-storm-warning-weather-icon--icon-search-engine-0.png" />
          })
          return;
        }

        if(response.confirmation == 'success'){
          this.props.profileCreated(response.profile);

          const cookies = new Cookies();
          cookies.set('token', response.token, { path: '/' });

          this.setState({
            isOpen: false
          });
        }
      })

    }
    
    return;
  }

 	render() {

      const currentUser = 
        (this.props.currentUser == null) ? 
          null : (<li className="item">Welcome, {this.props.currentUser.firstName}</li>);

      const signup = 
          (this.props.currentUser == null) ? 
          (<li className="item" onClick={this.openModal.bind(this, 'SIGNUP')} >Sign up</li>) : null;

      const login = 
          (this.props.currentUser == null) ? 
          (<li className="item" onClick={this.openModal.bind(this, 'LOGIN')} >Log In</li>) : null;
    
          
      const logout =   
        (this.props.currentUser == null) 
        ? null : (<li className="item" onClick={this.logout.bind(this)}>Log Out</li>);


      const modal = (this.state.modalMode == 'SIGNUP') ? 
        (<div>
              <div>
                <TextField
                  floatingLabelStyle={{color:"#fff"}}
                  floatingLabelFocusStyle={{color:"#fff"}}
                  inputStyle={{color:"#fff"}}
                  hintText=""
                  errorText={this.state.error.firstName}
                  onChange={this.updateField.bind(this, 'firstName')}
                  floatingLabelText="First Name"
                />
                </div>
                
                <div>
                <TextField
                  floatingLabelStyle={{color:"#fff"}}
                  floatingLabelFocusStyle={{color:"#fff"}}
                  inputStyle={{color:"#fff"}}
                  hintText=""
                  errorText={this.state.error.lastName}
                  onChange={this.updateField.bind(this, 'lastName')}
                  floatingLabelText="Last Name"
                />
                </div>
        </div>) : null;  

    	return (
        <MuiThemeProvider>
      		<div className="topBar">

            {currentUser}
      			{signup}
      			{login}
            {logout}

            <M isOpen={this.state.isOpen}>
              <ModalHeader>
                <ModalClose onClick={this.hideModal.bind(this)}/>
                <ModalTitle>{

                  (this.state.modalMode == 'SIGNUP') ? 'Register' : 'Login'

                } (Material UI)</ModalTitle>
              </ModalHeader>
              <ModalBody>
                
                {modal}

                <div>
                <TextField
                  floatingLabelStyle={{color:"#fff"}}
                  floatingLabelFocusStyle={{color:"#fff"}}
                  inputStyle={{color:"#fff"}}
                  hintText=""
                  errorText={this.state.error.email}
                  onChange={this.updateField.bind(this, 'email')}
                  floatingLabelText="Email"
                />
                </div>

                <div>
                <TextField
                  floatingLabelStyle={{color:"#fff"}}
                  floatingLabelFocusStyle={{color:"#fff"}}
                  inputStyle={{color:"#fff"}}
                  hintText=""
                  errorText={this.state.error.password}
                  onChange={this.updateField.bind(this, 'password')}
                  floatingLabelText="Password"
                />
                </div>

              </ModalBody>
              <ModalFooter>
                <RaisedButton label="Close" 
                              secondary={true} 
                              onClick={this.hideModal.bind(this)} 
                              style={{marginRight: 20}} />
                {

                  (this.state.modalMode == 'SIGNUP') ? 
                  (<RaisedButton label="Submit" 
                              primary={true} 
                              onClick={this.register.bind(this)} />) : 
                  (<RaisedButton label="Submit" 
                              primary={true} 
                              onClick={this.login.bind(this)} />)
                }              
                
              </ModalFooter>
            </M>
            <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
        		</div>
        </MuiThemeProvider>
    	);
  	}
}


const stateToProps = (state) => {

  // matched here state.xxx.~~
  return {
    currentUser: state.account.currentUser
  }
}

const dispatchToProps = (dispatch) => {

  return {
    profileCreated: (profile) => dispatch(actions.profileCreated(profile)),
    
    currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile)),
  }
}


export default connect(stateToProps, dispatchToProps)(TopBar);


const style = {

  icon: {
    width:36,
    height:36
  }
}