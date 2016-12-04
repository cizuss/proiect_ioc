import {
  DASHBOARD_ISSUES_RESPONSE,
  PROJECT_ISSUES_RESPONSE,
  ISSUE_RESPONSE,
  LOGIN_RESPONSE
} from '../constants/ActionTypes'

export default function issues (state = {}, action) {
  switch (action.type) {
    case LOGIN_RESPONSE:
      return {}

    case DASHBOARD_ISSUES_RESPONSE:
    case PROJECT_ISSUES_RESPONSE:
      if (action.error) { return state }
      const newState = { ...state }
      action.payload.forEach(issue => {
        newState[issue.id] = issue
      })
      return newState

    case ISSUE_RESPONSE:
      return { ...state, [action.payload.id]: action.payload }
  }
  return state
}