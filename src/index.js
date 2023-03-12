import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import StateProvider from './components/StateProvider/StateProvider'

const app = (
  <StateProvider>
    <App />
  </StateProvider>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(app)
