import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Base_URL = '/api'

const RollercoasterDetails = () => {
  const { id } = useParams()
  
  const navigate = useNavigate()

  const [rollercoaster, setRollercoaster] = useState([])

  const getRollercoaster = async () => {
    const response = await axios.get(`${Base_URL}/rollercoasters/${id}`)
    setRollercoaster(response.data.rollercoaster)
  }

  const deleteRollercoaster = async () => {
    let confirm = window.confirm('Delete Rollercoaster?')
    if (confirm === true) {
      try {
        const response = await axios.delete(`${Base_URL}/rollercoaster/${id}`)
        navigate('/rollercoasters')
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    getRollercoaster()
  }, [])

  return (
    <div className="main">
      <h1>Rollercoaster Details</h1>
      <section>
          <div className='rollercoasterDetails'>
            <h2>{rollercoaster.name}</h2>
            <img src={rollercoaster.image}></img>
            <h3>Manufacturer: {rollercoaster.manufacturer}</h3>
            <h3>Speed: {rollercoaster.speed}</h3>
            <h3>Height: {rollercoaster.height}</h3>
            <h3>Length: {rollercoaster.length}</h3>
            <h3>Inversions: {rollercoaster.inversions}</h3>
            <h3>Duration: {rollercoaster.duration}</h3>
            <h3>Height Requirement: {rollercoaster.heightRequirement}</h3>
          <button onClick={() => deleteRollercoaster()}>X</button>
          </div>
      </section>
    </div>
  )
}

export default RollercoasterDetails