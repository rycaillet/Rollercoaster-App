import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { createRollercoaster } from '../../../controllers'

const Base_URL = 'http://localhost:3001/api'

const viewRollercoasters = () => {
  const [rollercoaster, setRollercoaster] = useState([])

  const getRollercoaster = async () => {
    const response = await axios.get(`${Base_URL}/rollercoasters`)
    .then(setRollercoaster(response.data.rollercoaster))
    .catch((error) => {console.log(error)})
  }

  useEffect(() => {
    getRollercoaster()
  }, [])

  return (
    <div className="main">
      <h1>Rollercoasters</h1>
      <section>
        {rollercoaster?.map((rollercoasters) => (
          <Link to={`/rollercoaster/${rollercoasters._id}`} key={rollercoasters._id}>
            <h2>{rollercoasters.name}</h2>
            <img src={rollercoasters.image}></img>
          </Link>
        ))}
      </section>
    </div>
  )
}
  
export default viewRollercoasters