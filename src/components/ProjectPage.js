import React, { Component } from 'react'

import { Row } from 'react-bootstrap'

import SideBarPage from './SideBarPage'
import ProjectIssuesPage from './ProjectIssuesPage'

export default class ProjectPage extends Component {
  render () {
    return <Row>
      <SideBarPage />
      <ProjectIssuesPage />
    </Row>
  }
}
