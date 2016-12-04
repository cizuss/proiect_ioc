import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import * as reducers from '../reducers'

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware, promiseMiddleware),
  __DEV__ && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const rootReducer = combineReducers(reducers)

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = combineReducers(require('../reducers'))
      store.replaceReducer(nextReducer)
    })
  }
  return store
}
