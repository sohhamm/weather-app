import React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement,
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
