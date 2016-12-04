import { handleActions } from 'redux-actions'

import { PROJECTS_RESPONSE, LOGIN_RESPONSE } from '../constants/ActionTypes'

export default handleActions({
  [LOGIN_RESPONSE]: state => [],
  [PROJECTS_RESPONSE]: {
    next: (state, { payload }) => payload.map(project => project.id)
  }
}, [])
