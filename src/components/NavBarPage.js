import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBarPage extends Component {
  render () {
    return <div>
      <div>
        <div><Link to='/'>Home</Link></div>
      </div>
      {this.props.children}
    </div>
  }
}
