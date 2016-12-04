import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFoundPage extends Component {
  render () {
    return <div>
      <div>Sorry. Route not found. Go <Link to='/'>home</Link>!</div>
    </div>
  }
}
