import React, { Component } from 'react'

import { Row } from 'react-bootstrap'

import SideBarPage from './SideBarPage'
import ProjectIssuesPage from './ProjectIssuesPage'

export default class ProjectDashboardPage extends Component {
  render () {
    return <Row>
      <SideBarPage>{this.props.children}</SideBarPage>
      <ProjectIssuesPage>{this.props.children}</ProjectIssuesPage>
    </Row>
  }
}
