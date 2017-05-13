import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import MobileIndex from './components/mobile_index';
import { Router,Route,hashhistory } from 'react-router';
import Hello from './components/hello';

const routers=()=>(
 <Router history={hashhistory}>
    <Route path='/' component={Hello}/>

 </Router>
);

const app = <div>
  <MediaQuery query='(max-device-width: 1224px)'>
    <MobileIndex />
  </MediaQuery>
  <MediaQuery query='(min-device-width: 1224px)' >
  <PCIndex/></MediaQuery>
</div>
ReactDOM.render(

  app,
  document.getElementById('root')

)