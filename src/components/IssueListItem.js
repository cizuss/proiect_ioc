import React, { Component } from 'react'

import styles from './IssueListItem.scss'

const getLabelColor = (status) => {
  switch (status) {
    case 1:
      return styles.open
    case 2:
      return styles.inProgress
    default:
      return styles.closed
  }
}

export default class IssueListItem extends Component {

  render () {
    const { issue } = this.props
    return <div className={styles.box + ' ' + getLabelColor(issue.status)}>
      <a href={'/issue/' + issue.id}>{'[' + issue.issue_code + ']' + ' - ' + '[' + issue.name + ']'}</a>
    </div>
  }
}
