import { createAction } from 'redux-actions'

import { apiLogin } from '../api'
import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from '../constants/ActionTypes'

export const login = (username, password) => {
  return (dispatch, getState) => {
    dispatch(createAction(LOGIN_REQUEST)())
    const promiseForCall = apiLogin(username, password)
    promiseForCall.then(payload => {
      try {
        window.localStorage.setItem('loginData', JSON.stringify(payload))
      } catch (ex) {}
    })
    dispatch(createAction(LOGIN_RESPONSE)(promiseForCall))
  }
}

export const logout = () => dispatch => {
  try {
    window.localStorage.removeItem('loginData')
  } catch (ex) {}
  dispatch(createAction(LOGOUT)())
}

export const restoreLoginData = () => dispatch => {
  let data
  try {
    const json = window.localStorage.getItem('loginData')
    data = JSON.parse(json)
  } catch (ex) {}
  if (!data) { return }

  dispatch(createAction(LOGIN_REQUEST)())
  dispatch(createAction(LOGIN_RESPONSE)(data))
}
