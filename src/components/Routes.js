import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import AppPage from './AppPage'
import NotFoundPage from './NotFoundPage'
import DashboardPage from './DashboardPage'
import ProjectDashboardPage from './ProjectDashboardPage'

export default class Routes extends Component {
  render () {
    return <Router history={browserHistory}>
      <Route component={AppPage}>
        <Route path='/' component={DashboardPage} />
        <Route path='project/*' component={ProjectDashboardPage} />
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  }
}
