import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/rollercoasters">Rollercoasters</Link>
      <Link to="/guestList">Guests</Link>
    </nav>
  )
}

export default Nav
