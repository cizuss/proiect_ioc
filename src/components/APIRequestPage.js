import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map } from 'immutable'

import { sampleAPIRequest, sampleAPIRequestIfNeeded } from '../actions/SampleActions'

@connect(state => ({
  remoteData: state.sampleRemoteData
}))
export default class APIRequestPage extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    remoteData: React.PropTypes.instanceOf(Map)
  }

  requestData = () => {
    this.props.dispatch(sampleAPIRequest())
  }

  requestDataIfNeeded = () => {
    this.props.dispatch(sampleAPIRequestIfNeeded())
  }

  render () {
    const { remoteData } = this.props

    return <div>
      <div>Loaded state: {remoteData.get('loadState')}</div>
      <div>Error: {(remoteData.get('error') || '').toString()}</div>
      <div>Data: {JSON.stringify(remoteData.get('data'))}</div>
      <button onClick={this.requestData}>Request data</button>
      <button onClick={this.requestDataIfNeeded}>Request data if needed</button>
    </div>
  }
}
