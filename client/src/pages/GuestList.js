import GuestCard from '../components/GuestCard'
import { Link } from 'react-router-dom'

const GuestList = () => {
  return (
    <div className="guest-list">
      <GuestCard />
      <Link to="/guestList/form">
        <button>New Guest</button>
      </Link>
    </div>
  )
}

export default GuestList
