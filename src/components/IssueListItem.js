import React, { Component } from 'react'

import styles from './IssueListItem.scss'

export default class IssueListItem extends Component {

  getLabelColor = (status) => {
    switch (status) {
      case 1:
        return styles.blue
      case 2:
        return styles.yellow
      default:
        return styles.red
    }
  }

  render () {
    const { issue } = this.props
    // return <div>{JSON.stringify(issue)}</div>
    return <div className={styles.box}>
      <span className={styles.status + ' ' + this.getLabelColor(issue.status)} />
      <a href={'/issue/' + issue.id}>{'[' + issue.issue_code + ']' + ' - ' + '[' + issue.name + ']'}</a>
    </div>
  }
}
