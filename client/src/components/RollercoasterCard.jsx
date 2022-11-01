import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Base_URL = '/api'

const RollercoasterCard = () => {
  const [rollercoasters, setRollercoasters] = useState([])

  const getRollercoaster = async () => {
    const response = await axios.get(`${Base_URL}/rollercoasters`)
    setRollercoasters(response.data.rollercoaster)
  }
  
  
  useEffect(() => {
    getRollercoaster()
  }, [])


  return (
    <div className="main">
      <h1>Rollercoasters</h1>
      <section className = "rollercoaster-list">
        {rollercoasters?.map((rollercoaster) => (
          <div className="rollercoaster-card"key={rollercoaster._id}>
            <Link to={`/rollercoasters/${rollercoaster._id}`}>
              <h2>{rollercoaster.name}</h2>
              <div className="rollercoaster-img-wrapper">
                <img src={rollercoaster.image}/>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}
  
export default RollercoasterCard