import React from 'react'
import ReactDOM from 'react-dom/client'

// migrate to this when the below is fixed
import { UrbanRouter } from 'urban-router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UrbanRouter />
  </React.StrictMode>,
)
