import GuestCard from '../components/GuestCard'
import { Link } from 'react-router-dom'

const GuestList = () => {
  return (
    <div>
      <GuestCard />
      <button>
        <Link to="/guestList/form">New Guest</Link>
      </button>
    </div>
  )
}

export default GuestList
