import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Base_URL = 'http://localhost:3001/api'

const GuestDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const [guest, setGuest] = useState([])

  const getGuest = async () => {
    const response = await axios.get(`${Base_URL}/guests/${id}`)
    
    setGuest(response.data.guests)
  }

  const deleteGuest = async () => {
    let confirm = window.confirm('Delete Guest?')
    if (confirm === true) {
      try {
        const response = await axios.delete(`${Base_URL}/guests/${id}`)
        navigate('/guestList')
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    getGuest()
  }, [])

  return (
    <div className="main">
      <section>
          <div className='GuestDetails'>
          <div className='guest-img-wrapper'>
            <img src={guest.image} />
          </div>
            <h2>{guest.name}</h2>
            <h3>Age: {guest.age}</h3>
            <h3>Height: {guest.height}</h3>
          </div>
          <button onClick={() => deleteGuest()}>X</button>
      </section>
    </div>
  )
}

export default GuestDetails