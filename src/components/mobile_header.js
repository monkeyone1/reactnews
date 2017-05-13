import React, { Component } from 'react';
import logo from '../images/logo.png'

class MobileIndex extends Component {
  render() {
    return (
      <div id='mobileheader'>
       <header >
       <img src={logo} alt="logo"/>
         <span>ReactNews</span>
      </header>
      </div>
     
    );
  }
}

export default MobileIndex;