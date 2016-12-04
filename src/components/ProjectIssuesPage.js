import React, { Component } from 'react'
import { Col, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import styles from './NavBarPage.scss'
import issuesBoardStyle from './ProjectIssuesPage.scss'
import IssueList from './IssueList'

@connect(state => ({
  issues: state.issues
}))
export default class ProjectIssuesPage extends Component {
  render () {
    const { issues, issueIds } = this.props

    const sprints = []
    issueIds.forEach(issueId => {
      const issue = issues[issueId]
      if (!issue) { return }

      if (!sprints[issue.sprint]) {
        sprints[issue.sprint] = []
      }
      sprints[issue.sprint].push(issueId)
    })

    return <Col xs={12} md={10} lg={11} className={issuesBoardStyle.container}>
      {sprints.map((sprint, idx) =>
        <Panel key={idx} header={'Sprint ' + idx} bsStyle='primary'>
          <IssueList issueIds={sprint} />
        </Panel>
      )}
      <div className={styles.content}>
        {this.props.children}
      </div>
    </Col>
  }
}
