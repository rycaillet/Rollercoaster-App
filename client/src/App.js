import react from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RollercoasterCard from './components/RollercoasterCard'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <header className="Navbar">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rollercoasters" element={<RollercoasterCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
