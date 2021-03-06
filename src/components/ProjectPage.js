import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'

import SideBarPage from './SideBarPage'
import ProjectIssuesPage from './ProjectIssuesPage'
import { getProjectIssues } from '../actions/ProjectActions'

@connect((state, props) => ({
  issueIds: state.projectIssues[props.params.projectId] || []
}))
export default class ProjectPage extends Component {
  componentWillMount () {
    this.props.dispatch(getProjectIssues(this.props.params.projectId))
  }

  componentWillReceiveProps (newProps) {
    const newProjectId = newProps.params.projectId
    if (newProjectId !== this.props.params.projectId) {
      this.props.dispatch(getProjectIssues(newProjectId))
    }
  }

  render () {
    const { issueIds } = this.props

    return <Row>
      <SideBarPage />
      <ProjectIssuesPage issueIds={issueIds} />
    </Row>
  }
}
