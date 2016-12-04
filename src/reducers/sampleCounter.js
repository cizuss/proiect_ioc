import { SAMPLE_INCREMENT } from '../constants/ActionTypes'
import { handleActions } from 'redux-actions'

export default handleActions({
  [SAMPLE_INCREMENT]: (state, { payload }) => state + payload
}, 0)

// Does the same thing the conventional way
export const conventionalSampleCounter = (state = 0, action) => {
  if (action.type === SAMPLE_INCREMENT) {
    return state + action.payload
  }
  return state
}
