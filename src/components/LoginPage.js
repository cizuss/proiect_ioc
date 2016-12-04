import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Panel, FormControl, Button } from 'react-bootstrap'

import { login } from '../actions/LoginActions'
import styles from './LoginPage.scss'

@connect(state => ({
  loginState: state.user.loginState,
  loginError: state.user.error
}))
export default class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  handleLogin = () => {
    const { username, password } = this.state
    this.props.dispatch(login(username, password))
  }

  handleChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  render () {
    const { loginState, loginError } = this.props

    return <Grid>
      <div className={styles.loginBox}>
        <h1>Please log in</h1>
        {loginState === 'error' &&
          <Panel header='Error' bsStyle='danger'>
            {loginError.toString()}
          </Panel>
        }
        <FormControl
          type='text'
          placeholder='Username'
          onChange={this.handleChangeUsername}
        />
        <FormControl
          type='password'
          placeholder='Password'
          onChange={this.handleChangePassword}
        />
        <Button
          bsSize='large'
          disabled={loginState === 'loading'}
          onClick={this.handleLogin}
        >
          Login
        </Button>
      </div>
    </Grid>
  }
}
