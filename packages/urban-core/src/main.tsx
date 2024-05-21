import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// migrate to this when the below is fixed
import { UrbanRouter } from 'urban-router'

// TODO: Find a way to export a glob mechanism from the router package
const Routes: Record<string, any>  = import.meta.glob('/src/pages/[**/a-z[]*.{tsx,jsx}', { eager: true });
const PRESERVED: Record<string, any> = import.meta.glob('/src/pages/(_app|404|_document).{tsx,jsx}', { eager: true });

console.log(PRESERVED)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UrbanRouter ROUTES={Routes} PRESERVED={PRESERVED} />
    </BrowserRouter>
  </React.StrictMode>,
)
