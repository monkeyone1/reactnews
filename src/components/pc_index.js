import React, { Component } from 'react';
import PCHeader from './pc_Header';
import PCFooter from './pc_Footer';
import PCNewsContainer from './pc_newscontainer';
import '../css/pc.css'

class PCIndex extends Component {
  render() {
    return (
      <div>
        <PCHeader/>
        <PCNewsContainer></PCNewsContainer>
        <PCFooter/>
      </div>
    );
  }
}

export default PCIndex;