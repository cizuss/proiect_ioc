import { createAction } from 'redux-actions'

import { apiCall } from '../api'
import { SAMPLE_INCREMENT, SAMPLE_REQUEST, SAMPLE_RESPONSE } from '../constants/ActionTypes'

export const sampleIncrement = createAction(SAMPLE_INCREMENT, (amount = 1) => amount)

// Does the same thing
export function conventionalSampleIncrement (payload = 1) {
  return { type: SAMPLE_INCREMENT, payload }
}

export const sampleAPIRequest = () => {
  return (dispatch) => {
    dispatch(createAction(SAMPLE_REQUEST)())
    const promiseForCall = apiCall('GET', '/posts/1')
    dispatch(createAction(SAMPLE_RESPONSE)(promiseForCall))
  }
}

export const sampleAPIRequestIfNeeded = () => {
  return (dispatch, getState) => {
    const loadState = getState().sampleRemoteData.get('loadState')
    if (loadState === 'none' || loadState === 'error') {
      dispatch(sampleAPIRequest())
    }
  }
}
