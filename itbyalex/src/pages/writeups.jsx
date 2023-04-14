import React from 'react'
import ReactDOM from 'react-dom/client'
import './writeups.css'
import Sidebar from '../pgexts/sideBar'
import PageTop from '../pgexts/pgtop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Sidebar />
    <PageTop />
  </React.StrictMode>,
)
