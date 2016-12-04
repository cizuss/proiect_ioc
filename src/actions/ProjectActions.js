import { createAction } from 'redux-actions'

import { apiGetProjects } from '../api'
import {
  PROJECTS_REQUEST, PROJECTS_RESPONSE
} from '../constants/ActionTypes'

export const getProjects = () => {
  return (dispatch, getState) => {
    dispatch(createAction(PROJECTS_REQUEST)())
    const promiseForCall = apiGetProjects(getState)
    dispatch(createAction(PROJECTS_RESPONSE)(promiseForCall))
  }
}
