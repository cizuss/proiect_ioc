import { handleActions } from 'redux-actions'

import { LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from '../constants/ActionTypes'

export default handleActions({
  [LOGIN_REQUEST]: state => ({ loginState: 'loading' }),

  [LOGIN_RESPONSE]: {
    next: (state, { payload }) => ({
      loginState: 'loggedIn',
      user: payload.user,
      token: payload.token
    }),

    throw: (state, { payload }) => ({
      loginState: 'error',
      error: payload
    })
  },

  [LOGOUT]: state => ({ loginState: 'loggedOut' })
}, { loginState: 'loggedOut' })
