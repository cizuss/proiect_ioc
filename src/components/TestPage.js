import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getDashboardIssues,
  getProjectIssues,
  getIssue
} from '../actions/IssueActions'

@connect()
export default class TestPage extends Component {
  render () {
    return <div>
      <button onClick={() => this.props.dispatch(getDashboardIssues())}>Dashboard Issues</button>
      <button onClick={() => this.props.dispatch(getIssue(0))}>Issue 0</button>
      <button onClick={() => this.props.dispatch(getProjectIssues(0))}>Project 0</button>
    </div>
  }
}
