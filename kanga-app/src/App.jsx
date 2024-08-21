import { useState } from 'react'
import { Router, Route } from 'feather-router';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Route path="/" />
        <Route path="/recipes" />
        <Route path="/community" />
        <Route path="/about" />
      </Router>
    </>
  )
}

export default App
