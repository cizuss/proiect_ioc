import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Col, Panel } from 'react-bootstrap'

import { getDashboardIssues } from '../actions/IssueActions'
import IssueList from './IssueList'

@connect(state => ({
  issues: state.dashboardIssues
}))
export default class DashboardPage extends Component {
  componentWillMount () {
    this.props.dispatch(getDashboardIssues())
  }

  render () {
    const { issues } = this.props

    return (
      <Grid fluid style={{ paddingTop: '1em' }}>
        <Col xs={12}>
          <Panel header='Issues assigned to me' bsStyle='primary'>
            <IssueList issueIds={issues} />
          </Panel>
        </Col>
      </Grid>
    )
  }
}
