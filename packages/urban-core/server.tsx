import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import App from './src/app'

const app = express()

app.get('*', (req, res) => {
  res.send(`
   <!DOCTYPE html>
    <html>
      <head>
        <title>Urban</title>
      </head>
      <body>
        <div id="root">
          ${renderToString(<App />)}
        </div>
      </body>
    </html>
    `)
})

app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
