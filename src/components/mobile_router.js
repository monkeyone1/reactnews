
import { Router,Route,hashHistory } from 'react-router';
import  MobileNewsDetails from './mobile_news_details';
import MobileIndex from './mobile_index';
import React, { Component } from 'react';

class MobileRouter extends Component {
  render() {
    return (
      <Router history={hashHistory}>
       <Route path='/' component={MobileIndex}></Route>
       <Route path='/details/:uniquekey' component={MobileNewsDetails}/>
      </Router>
    );
  }
}

export default MobileRouter;
