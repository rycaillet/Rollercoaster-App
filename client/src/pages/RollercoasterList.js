import RollercoasterCard from '../components/RollercoasterCard'
import { Link } from 'react-router-dom'

const RollercoasterList = () => {
  return (
    <div>
      <RollercoasterCard />
      <button>
        <Link to="/rollercoasters/form">new Rollercoaster</Link>
      </button>
    </div>
  )
}

export default RollercoasterList
