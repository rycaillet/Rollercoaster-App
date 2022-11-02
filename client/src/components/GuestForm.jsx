import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const GuestForm = () => {
    let navigate = useNavigate()
    let { id } = useParams()
    const initialForm = {
        name: '',
        age: '',
        height: '',
        image: ''
    }

    const [formState, setFormState] = useState(initialForm)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/guests', formState)

        setFormState(initialForm)
        navigate(`/guestList`)
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    return (
    <div className="form">
    <h1>Add New Guest</h1>
    <div>
    <form onSubmit={ handleSubmit } key={formState.id}>
      <ul>
        <li><input required type="text" value={formState.name} onChange={handleChange} id={'name'} placeholder={'name'}/></li>
        <li><input required type="text" value={formState.age} onChange={handleChange} id={'age'} placeholder={'age'}/></li>
        <li><input required type="text" value={formState.height} onChange={handleChange} id={'height'} placeholder={'height'}/></li>
        <li><input required type="text-area" value={formState.image} onChange={handleChange} id={'image'} placeholder={'image-url'}/></li>
        <button type="submit">Submit</button>
        </ul>
    </form>
    </div>
    </div>
    )
}

export default GuestForm