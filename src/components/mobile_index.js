
import React, { Component } from 'react';
import Mobileheader from './mobile_header';
import Moblieheader from './mobile_Footer';
import '../css/mobile.css'
class MobileIndex extends Component {
  render() {
    return (
      <div>
        <Mobileheader/>
        <Moblieheader/>
      </div>
    );
  }
}

export default MobileIndex;