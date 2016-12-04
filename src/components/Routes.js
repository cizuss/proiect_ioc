import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import AppPage from './AppPage'
import NotFoundPage from './NotFoundPage'

export default class Routes extends Component {
  render () {
    return <Router history={browserHistory}>
      <Route component={AppPage}>
        <Route path='/' />
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  }
}
