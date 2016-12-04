import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import AppPage from './AppPage'
import NotFoundPage from './NotFoundPage'
import DashboardPage from './DashboardPage'
import ProjectPage from './ProjectPage'
import IssuePage from './IssuePage'

export default class Routes extends Component {
  render () {
    return <Router history={browserHistory}>
      <Route component={AppPage}>
        <Route path='/' component={DashboardPage} />
        <Route path='/project/:projectId' component={ProjectPage} />
        <Route path='/issue/:issueId' component={IssuePage} />
        <Route path='*' component={NotFoundPage} />
      </Route>
    </Router>
  }
}
