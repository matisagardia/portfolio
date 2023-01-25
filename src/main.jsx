import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contact } from './Components/Contact'
import { Home } from './Components/Home'
import { Navbar } from './Components/Navbar'
import { Projects } from './Components/Projects'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Projects />
  </React.StrictMode>,
)
