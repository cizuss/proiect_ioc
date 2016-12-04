import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sampleIncrement } from '../actions/SampleActions'

import styles from './CounterButtonPage.scss'

@connect(state => ({
  counter: state.sampleCounter
}))
export default class CounterButton extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    counter: React.PropTypes.number
  }

  buttonClicked = () => {
    this.props.dispatch(sampleIncrement())
  }

  render () {
    const { counter } = this.props

    return <div>
      <button
        className={styles.button}
        onClick={this.buttonClicked}
      >
        This button has been pressed {counter} times
      </button>
    </div>
  }
}
