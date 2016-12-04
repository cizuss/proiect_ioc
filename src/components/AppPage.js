import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginPage from './LoginPage'
import NavBarPage from './NavBarPage'

import { restoreLoginData } from '../actions/LoginActions'

@connect(state => ({
  loginState: state.user.loginState
}))
export default class AppPage extends Component {
  componentWillMount () {
    this.props.dispatch(restoreLoginData())
  }

  render () {
    const { loginState } = this.props

    if (loginState === 'loggedIn') {
      return <NavBarPage>{this.props.children}</NavBarPage>
    }
    return <LoginPage />
  }
}
