import React, { Component } from 'react'

import { Col, Panel } from 'react-bootstrap'

import styles from './NavBarPage.scss'
import issuesBoardStyle from './ProjectIssuesPage.scss'

const issues = [
  {
    name: 'issue1',
    id: '1',
    code: 'code1',
    sprint: 1
  },
  {
    name: 'issue2',
    id: '2',
    code: 'code2',
    sprint: 2
  },
  {
    name: 'issue3',
    id: '3',
    code: 'code3',
    sprint: 1
  }
]

var result = []

export default class ProjectIssuesPage extends Component {

  render () {
    return <Col xs={11} md={11} className={issuesBoardStyle.issuesBox}>
      {issues.map((issue, idx) => {
        if (!(issue.sprint in result)) {
          result[issue.sprint] = []
        }
        result[issue.sprint].push(issue)
      }
      )}
      {console.log(result)}
      {result.map((sprint, idx) =>
        <Panel header={idx} bsStyle='primary'>
          {
            sprint.map(issue =>
              <p>{issue.code} {issue.name}</p>
          )}
        </Panel>
      )}
      <div className={styles.content}>
        {this.props.children}
      </div>
    </Col>
  }
}
