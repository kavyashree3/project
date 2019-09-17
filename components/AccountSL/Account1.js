import React, { Component } from 'react';
import RegisterBox from './RegisterBox';
import LoginBox from './LoginBox';
import {Link} from 'react-router-dom';
import './Account1.css';

export default class Account1 extends Component {
    
    constructor(props){
        super(props)
        this.state={
          isLoginOpen:true,
          isRegisterOpen:false
        };
      }

      showRegisterBox(){
        this.setState({isRegisterOpen:true,isLoginOpen:false})
      }

      showLoginBox(){
        this.setState({isRegisterOpen:false,isLoginOpen:true})
      }

      render(){      
        return (
        <div style={{marginTop:'80px'}}>
        <div className="root-container">
          <div className="box-controller">          
            <div className="controller" onClick={this.showLoginBox.bind(this)}>
              Login
            </div>
            <div className="controller" onClick={this.showRegisterBox.bind(this)}>
              Sign up
            </div>
          </div>
          <div className="box-container">
            {this.state.isLoginOpen && <LoginBox picks={this.props.picked}/>}
            {this.state.isRegisterOpen && <RegisterBox/>}
          </div>
          </div>
        </div>
        );
    }
}
