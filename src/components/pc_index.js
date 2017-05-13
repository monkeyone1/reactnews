import React, { Component } from 'react';
import PCHeader from './pc_Header';
import PCFooter from './pc_Footer';
import '../css/pc.css'
class PCIndex extends Component {
  render() {
    return (
      <div>
        <PCHeader/>
        <PCFooter/>
      </div>
    );
  }
}

export default PCIndex;