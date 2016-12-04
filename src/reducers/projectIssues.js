import { handleActions } from 'redux-actions'

import { LOGIN_RESPONSE, PROJECT_ISSUES_RESPONSE } from '../constants/ActionTypes'

export default handleActions({
  [LOGIN_RESPONSE]: () => {},
  [PROJECT_ISSUES_RESPONSE]: {
    next: (state, { payload }) =>
      ({ ...state, [payload.projectId]: payload.issues.map(issue => issue.id) })
  }
}, {})
