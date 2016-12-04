import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import AppPage from './AppPage'
import NotFoundPage from './NotFoundPage'
import DashboardPage from './DashboardPage'
import TestPage from './TestPage'
import ProjectPage from './ProjectPage'

export default class Routes extends Component {
  render () {
    return <Router history={browserHistory}>
      <Route component={AppPage}>
        <Route path='/' component={DashboardPage} />
        <Route path='/test' component={TestPage} />
        <Route path='/project/:projectId' component={ProjectPage} />
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  }
}
