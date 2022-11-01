import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  return (
    <nav className="navbar">
      <Link className='navbar' to="/">Home</Link>
      <Link className='navbar' to="/rollercoasters">Rollercoasters</Link>
      <Link className='navbar' to="/guestList">Guests</Link>
    </nav>
  )
}

export default Nav
