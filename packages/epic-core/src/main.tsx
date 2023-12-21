import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Router as EpicRouter } from './router'
// import { Router as EpicRouter } from 'epic-router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <Router>
      <EpicRouter />
    </Router>

  </React.StrictMode>,
)
