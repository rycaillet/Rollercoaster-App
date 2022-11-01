import './App.css'
import { Routes, Route } from 'react-router-dom'
import RollercoasterList from './pages/RollercoasterList'
import Nav from './components/Nav'
import Home from './pages/Home'
import RollercoasterDetails from './components/RollercoasterDetails'
import GuestList from './pages/GuestList'
import GuestDetails from './components/GuestDetails'
import RollercoasterForm from './components/RollercoasterForm'
import GuestForm from './components/GuestForm'

function App() {
  return (
    <div className="App">
      <header className="Navbar">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rollercoasters" element={<RollercoasterList />} />
          <Route path="/rollercoasters/form" element={<RollercoasterForm />} />
          <Route
            path="/rollercoasters/:id"
            element={<RollercoasterDetails />}
          />
          <Route path="/guestList" element={<GuestList />} />
          <Route path="/guest/:id" element={<GuestDetails />} />
          <Route path="/guestList/form" element={<GuestForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
