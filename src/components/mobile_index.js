
import React, { Component } from 'react';
import Mobileheader from './mobile_header';
import Moblieheader from './mobile_Footer';
import '../css/mobile.css'
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
import MobileList from './mobile_list';
class MobileIndex extends Component {
  render() {
    return (
      <div>
        <Mobileheader/>
        <Tabs>
        	<TabPane tab="头条" key="1">
						<MobileList count={20} type="top"/>
            
					</TabPane>
					<TabPane tab="社会" key="2">
						<MobileList count={20} type="shehui"/>
					</TabPane>
					<TabPane tab="国内" key="3">
						<MobileList count={20} type="guonei"/>
					</TabPane>
					<TabPane tab="国际" key="4">
						<MobileList count={20} type="guoji"/>
					</TabPane>
					<TabPane tab="娱乐" key="5">
						<MobileList count={20} type="yule"/>
					</TabPane>
        
        </Tabs>
					
        <Moblieheader/>
      </div>
    );
  }
}

export default MobileIndex;