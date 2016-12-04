import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import NavBarPage from './NavBarPage'
import CounterButtonPage from './CounterButtonPage'
import APIRequestPage from './APIRequestPage'
import NotFoundPage from './NotFoundPage'

export default class Routes extends Component {
  render () {
    return <Router history={browserHistory}>
      <Route component={NavBarPage}>
        <Route path='/'>
          <Route path='counter' component={CounterButtonPage} />
          <Route path='api-request' component={APIRequestPage} />
        </Route>
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  }
}
