import RollercoasterCard from '../components/RollercoasterCard'
import { Link } from 'react-router-dom'

const RollercoasterList = () => {
  return (
    <div className="rollercoaster-list">
      <RollercoasterCard />
      <Link to="/rollercoasters/form">
        <button>New Rollercoaster</button>
      </Link>
    </div>
  )
}

export default RollercoasterList
