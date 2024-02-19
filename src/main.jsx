import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// redux
import { configureStore } from './store/store.js'
import { Root } from './Root.jsx'
//
const store = configureStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
)
