import { createAction } from 'redux-actions'

import { apiGetDashboardIssues, apiGetIssue, apiUpdateIssue } from '../api'
import {
  DASHBOARD_ISSUES_REQUEST, DASHBOARD_ISSUES_RESPONSE,
  ISSUE_REQUEST, ISSUE_RESPONSE,
  UPDATE_ISSUE_REQUEST, UPDATE_ISSUE_RESPONSE
} from '../constants/ActionTypes'

export const getDashboardIssues = () => {
  return (dispatch, getState) => {
    dispatch(createAction(DASHBOARD_ISSUES_REQUEST)())
    const promiseForCall = apiGetDashboardIssues(getState)
    dispatch(createAction(DASHBOARD_ISSUES_RESPONSE)(promiseForCall))
  }
}

export const getIssue = (issueId) => {
  return (dispatch, getState) => {
    dispatch(createAction(ISSUE_REQUEST)())
    const promiseForCall = apiGetIssue(getState, issueId)
    dispatch(createAction(ISSUE_RESPONSE)(promiseForCall))
  }
}

export const updateIssue = (issueId, diff) => {
  return (dispatch, getState) => {
    dispatch(createAction(UPDATE_ISSUE_REQUEST)(issueId))
    const promiseForCall = apiUpdateIssue(getState, issueId, diff)
    dispatch(createAction(UPDATE_ISSUE_RESPONSE)(promiseForCall))
  }
}
