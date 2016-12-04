import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  issues: state.issues
}))
export default class IssueList extends Component {
  render () {
    const { issues, issueIds } = this.props

    return <div>{JSON.stringify(issueIds.map(id => issues[id]))}</div>
  }
}
