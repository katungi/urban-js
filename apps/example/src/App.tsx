import { useState } from 'react'
import './App.css'
import Button from "@urban/ui/button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Urban test</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      
    </>
  )
}

export default App
