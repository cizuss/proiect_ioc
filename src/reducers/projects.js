import { handleActions } from 'redux-actions'

import { PROJECTS_RESPONSE, LOGIN_RESPONSE } from '../constants/ActionTypes'

export default handleActions({
  [LOGIN_RESPONSE]: state => {},
  [PROJECTS_RESPONSE]: {
    next: (state, { payload }) => {
      const newState = { ...state }
      payload.forEach(project => {
        newState[project.id] = project
      })
      return newState
    }
  }
}, {})
