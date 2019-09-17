import React from 'react';
import axios from 'axios';
import './loginstyle.scss';
import './timerstyle.scss';
import { Redirect } from 'react-router';
import {Link} from 'react-router-dom';
//import ProductList from '../ProductList';
//import createHistory from 'history/createBrowserHistory';
//import {BrowserRouter as Router} from 'react-router-dom';
//import { createHashHistory } from 'history';
//export const history = createHashHistory();

const UserNam=RegExp(/^[a-zA-Z]+([._]?[a-zA-Z]+)*$/);

const formValid = ({formErrors, ...rest}) => { // ...rest is the username , password, email, phonenumber
  let valid=true;
  // validates form errors beign empty.
  Object.values(formErrors).forEach(val => {val.length > 0 && (valid=false)});
  // validate the form was filled out.
  Object.values(rest).forEach(val => {val === null && (valid = false);});
  return valid;  
};

export default class LoginBox extends React.Component{
  
    constructor(props){
      super(props)
      this.state={
        //redirect:null,
        toDashboard: false,
        username:null,
        password:null,
        formErrors:{
          username:"",
          password:""
        },     
       }; 
    }

    submitLogin= e => {
   
      // Prevents the page from going to next page when the submit button is pressed, before the page is validated.         
      if(formValid(this.state)){
        console.log(`
          --Submitting--
            UserName : ${this.state.username}
            Password: ${this.state.password}
            `);
            var url ='http://localhost:4001/login';
            axios.post(url, {
               username: this.state.username,
               password: this.state.password,
    })
  

    
            .then((response) => this.setState(() => ({
              toDashboard: true
            })))
        


    .catch(function (error) {
      console.log(error);
    });    
  
  }else{ 
            console.error("Form Invalid - Display Error Message");
         }
      
    };
    handleChange = e => {
      e.preventDefault(); // Prevents the page from going to next page when the submit button is pressed, before the page is validated.
      const {name,value}=e.target;
      let formErrors = this.state.formErrors;

      switch(name){
        case 'username': 
            formErrors.username = 
            UserNam.test(value)  ? 
              "":
              "invalid username";
              break;
        case 'password': 
            formErrors.password = 
              value.length <6 ? 
              "minimum 6 characters required": 
              "";
              break;
        default:
          break;
      }
      this.setState({formErrors, [name]:value}, () => console.log(this.state));
    };

    render(){
      if (this.state.toDashboard === true) {
        return <Redirect to="/" />
      }
      const {formErrors} = this.state;
      return(
        <div className="inner-container">
        <div className="header">
         Login
        </div>
          <div className="box">
          <form onSubmit={this.handleSubmit}  noValidate>     
            <div className="input-group">
            
              <label htmlFor="username">Username</label>              
              <input type="text" 
                     name="username" 
                     className="login-input" 
                     placeholder="username"                         
                     noValidate
                     onChange={this.handleChange}
               />    
               {formErrors.username.length>0 && (<span className='errorMessage'>{formErrors.username}</span>)}          
            </div>
            <br/>
            <div className="input-group">
              <label htmlFor="password">Password</label>              
              <input type="password" 
                     name="password" 
                     className="login-input" 
                     placeholder="password"
                     noValidate
                     onChange={this.handleChange}
              />
              {formErrors.password.length>0 && (<span className='errorMessage'>{formErrors.password}</span>)}  
            </div>
            <br/>       
            <Link to="/">      
            <button type="button" className="login-btn" onClick={this.props.picks}>Login</button>
            </Link> 
            </form>             
          </div>      
        </div>
      )
    }
  }
//this.submitLogin.bind(this),