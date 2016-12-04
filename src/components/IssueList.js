import React, { Component } from 'react'
import { connect } from 'react-redux'

import IssueListItem from './IssueListItem'

@connect(state => ({
  issues: state.issues
}))
export default class IssueList extends Component {
  render () {
    const { issues, issueIds } = this.props
    return (
      <div>
        {issueIds.map(issueId =>
          <IssueListItem key={issueId} issue={issues[issueId]} />
        )}
      </div>
    )
  }
}
