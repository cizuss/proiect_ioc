import { createAction } from 'redux-actions'

import { apiLogin } from '../api'
import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from '../constants/ActionTypes'

export const login = (username, password) => {
  return (dispatch, getState) => {
    dispatch(createAction(LOGIN_REQUEST)())
    const promiseForCall = apiLogin(username, password)
    dispatch(createAction(LOGIN_RESPONSE)(promiseForCall))
  }
}

export const logout = createAction(LOGOUT)
