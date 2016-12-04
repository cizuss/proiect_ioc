import { createAction } from 'redux-actions'

import { apiGetDashboardIssues, apiGetIssue, apiGetProjectIssues } from '../api'
import {
  DASHBOARD_ISSUES_REQUEST, DASHBOARD_ISSUES_RESPONSE,
  PROJECT_ISSUES_REQUEST, PROJECT_ISSUES_RESPONSE,
  ISSUE_REQUEST, ISSUE_RESPONSE
} from '../constants/ActionTypes'

export const getDashboardIssues = () => {
  return (dispatch, getState) => {
    dispatch(createAction(DASHBOARD_ISSUES_REQUEST)())
    const promiseForCall = apiGetDashboardIssues(getState)
    dispatch(createAction(DASHBOARD_ISSUES_RESPONSE)(promiseForCall))
  }
}

export const getProjectIssues = (projectId) => {
  return (dispatch, getState) => {
    dispatch(createAction(PROJECT_ISSUES_REQUEST)())
    const promiseForCall = apiGetProjectIssues(getState, projectId)
      .then(issues => ({ projectId, issues }))
    dispatch(createAction(PROJECT_ISSUES_RESPONSE)(promiseForCall))
  }
}

export const getIssue = (issueId) => {
  return (dispatch, getState) => {
    dispatch(createAction(ISSUE_REQUEST)())
    const promiseForCall = apiGetIssue(getState, issueId)
    dispatch(createAction(ISSUE_RESPONSE)(promiseForCall))
  }
}
