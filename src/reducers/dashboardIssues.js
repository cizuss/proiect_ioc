import {
  DASHBOARD_ISSUES_RESPONSE,
  LOGIN_RESPONSE
} from '../constants/ActionTypes'

export default function dashboardIssues (state = [], action) {
  switch (action.type) {
    case LOGIN_RESPONSE:
      return []

    case DASHBOARD_ISSUES_RESPONSE:
      if (action.error) { return state }
      return action.payload.map(issue => issue.id)
  }
  return state
}
