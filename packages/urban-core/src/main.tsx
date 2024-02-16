import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Router as UrbanRouter } from '../utils/router'

// migrate to this when the below is fixed
// import { Router as UrbanRouter } from 'urban-router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Router>
      <UrbanRouter />
    </Router>

  </React.StrictMode>,
)
