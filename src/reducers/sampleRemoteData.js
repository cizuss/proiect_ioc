import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

import { SAMPLE_REQUEST, SAMPLE_RESPONSE } from '../constants/ActionTypes'

export default handleActions({
  [SAMPLE_REQUEST]: state => state
    .set('loadState', 'loading')
    .set('error', null)
    .set('data', null),

  [SAMPLE_RESPONSE]: {
    next: (state, { payload }) => state
      .set('loadState', 'done')
      .set('data', payload),

    throw: (state, { payload }) => state
      .set('loadState', 'error')
      .set('error', payload)
      .set('data', null)
  }

}, Immutable.fromJS({ loadState: 'none', data: null, error: null }))
