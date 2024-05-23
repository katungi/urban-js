import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom';

// migrate to this when the below is fixed
// import { UrbanRouter } from 'urban-router'

// import { Router as UrbanRouter } from '../utils/router';
import App from './app';

// TODO: Find a way to export a glob mechanism from the router package
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <UrbanRouter />
    </BrowserRouter> */}
  </React.StrictMode>,
)
