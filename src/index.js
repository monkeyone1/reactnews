import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index';
import PCRouter from './components/pc_router';
import MobileRouter from './components/mobile_router';



const app = <div>
  <MediaQuery query='(max-device-width: 1224px)'>
    <MobileRouter />
  </MediaQuery>
  <MediaQuery query='(min-device-width: 1224px)' >
   <PCRouter/></MediaQuery>
</div>
ReactDOM.render(

  app,
  document.getElementById('root')

)