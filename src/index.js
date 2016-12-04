import 'whatwg-fetch'

import './css/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Routes from './components/Routes'
import configureStore from './store/configureStore'

const store = configureStore()
const rootElement = <Provider store={store}>
  <Routes />
</Provider>

ReactDOM.render(rootElement, document.getElementById('react-root'))
