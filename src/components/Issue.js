import React, { Component } from 'react'

export default class Issue extends Component {
  render () {
    const { issue } = this.props
    return <div>{JSON.stringify(issue)}</div>
  }
}
