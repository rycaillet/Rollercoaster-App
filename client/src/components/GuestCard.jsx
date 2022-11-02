import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Base_URL = '/api'

const GuestCard = () => {
  let navigate = useNavigate()

  const [guests, setGuests] = useState([])

  const getGuests = async () => {
    const response = await axios.get(`${Base_URL}/guests`)
    setGuests(response.data.guests)
  }

  useEffect(() => {
    getGuests()
  }, [])

  return (
    <div className="main">
      <h1>Guests</h1>
      <section className="guest-list">
        {guests?.map((guest) => (
          <div className="guest-card"to={`/guest/${guest._id}`} key={guest._id} onClick={() => navigate(`/guest/${guest._id}`)}>
            <div className='guest-img-wrapper'>
              <img src={guest.image} />
            </div>
            <h2>{guest.name}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}
  
export default GuestCard