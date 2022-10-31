import react from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="Navbar">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
