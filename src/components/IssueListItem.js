import React, { Component } from 'react'

export default class IssueListItem extends Component {
  render () {
    const { issue } = this.props
    return <div>{JSON.stringify(issue)}</div>
  }
}
