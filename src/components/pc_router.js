
import { Router,Route,hashHistory } from 'react-router';
import PCDeail from './pc_news_detail';
import PCIndex from './pc_index';
import React, { Component } from 'react';

class PCRouters extends Component {
  render() {
    return (
      <Router history={hashHistory}>
       <Route path='/' component={PCIndex}></Route>
       <Route path='/details/:uniquekey' component={PCDeail}/>
        
      </Router>
    );
  }
}

export default PCRouters;
