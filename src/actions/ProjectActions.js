import { createAction } from 'redux-actions'

import { apiGetProjects, apiGetProjectIssues } from '../api'
import {
  PROJECTS_REQUEST, PROJECTS_RESPONSE,
  PROJECT_ISSUES_REQUEST, PROJECT_ISSUES_RESPONSE
} from '../constants/ActionTypes'

export const getProjects = () => {
  return (dispatch, getState) => {
    dispatch(createAction(PROJECTS_REQUEST)())
    const promiseForCall = apiGetProjects(getState)
    dispatch(createAction(PROJECTS_RESPONSE)(promiseForCall))
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

