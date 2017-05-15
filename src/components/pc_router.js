
import React, { Component } from 'react';
import { Router,Route,hashHistory } from 'react-router';
import PCDeail from './pc_news_detail';
import PCIndex from './pc_index';
import PCUserCenter from './pc_usercenter';


class PCRouters extends Component {
  render() {
    return (
      <Router history={hashHistory}>
       <Route path='/' component={PCIndex}></Route>
       <Route path='/details/:uniquekey' component={PCDeail}/>
       <Router path='/usercenter' component={PCUserCenter}/> 
      </Router>
    );
  }
}

export default PCRouters;
