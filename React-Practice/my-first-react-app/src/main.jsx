import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import Clock from './clock.jsx'
//import FunctionalInput from './funcCompo.jsx'
import ClassInput from './classCompo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClassInput />
  </React.StrictMode>,
)
