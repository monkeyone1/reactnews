
import React, { Component } from 'react';
import Mobileheader from './mobile_header';
import Moblieheader from './mobile_Footer';
import '../css/mobile.css'
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
class MobileIndex extends Component {
  render() {
    return (
      <div>
        <Mobileheader/>
        <Tabs>
					<TabPane tab="头条" key="1"></TabPane>
					<TabPane tab="社会" key="2"></TabPane>
					<TabPane tab="国内" key="3"></TabPane>
					<TabPane tab="国际" key="4"></TabPane>
					<TabPane tab="娱乐" key="5"></TabPane>
				</Tabs>
					
        <Moblieheader/>
      </div>
    );
  }
}

export default MobileIndex;