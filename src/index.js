import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from '../src/Reducers/ui'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)