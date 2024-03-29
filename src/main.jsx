import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto bg-slate-400 p-3 flex flex-col justify-start'>
    <App />
  </div>,
)
