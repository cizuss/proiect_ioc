import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'react-bootstrap'

import { getIssue, updateIssue } from '../actions/IssueActions'
import styles from './IssuePage.scss'
import Issue from './Issue'

@connect((state, props) => ({
  issue: state.issues[props.params.issueId],
  userId: state.user.user.id
}))
export default class IssuePage extends Component {
  componentWillMount () {
    this.props.dispatch(getIssue(this.props.params.issueId))
  }

  state = {
    editing: false
  }

  handleEdit = () => {
    if (this.state.editing) {
      this.props.dispatch(updateIssue(this.props.params.issueId, this.state.issue))
      this.setState({ editing: false })
    } else {
      this.setState({
        editing: true,
        issue: this.props.issue
      })
    }
  }

  handleAssignToMe = () => {
    this.props.dispatch(updateIssue(this.props.params.issueId, {
      assignee_id: this.props.userId
    }))
  }

  handleStartIssue = () => {
    let status = this.props.issue.status
    status = Math.min(3, status + 1)
    this.props.dispatch(updateIssue(this.props.params.issueId, { status }))
  }

  render () {
    const { issue: propsIssue } = this.props
    const { issue: stateIssue, editing } = this.state
    const issue = editing ? stateIssue : propsIssue
    if (!issue) { return <div /> }

    return (
      <div className={styles.container}>
        <ButtonGroup>
          <Button onClick={this.handleEdit}>Edit</Button>
          <Button onClick={this.handleAssignToMe} disabled={editing}>Assign to me</Button>
          <Button onClick={this.handleStartIssue} disabled={editing}>Start issue</Button>
        </ButtonGroup>
        <Issue editing={editing} issue={issue} />
      </div>
    )
  }
}
