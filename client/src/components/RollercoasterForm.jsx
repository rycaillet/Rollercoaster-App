import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const RollercoasterForm = () => {
    let navigate = useNavigate()
    let { id } = useParams()
    const initialForm = {
        name: '',
        manufacturer: '',
        speed: '',
        height: '',
        length: '',
        inversions: '',
        duration: '',
        image: '',
        heightRequirement: ''
    }

    const [formState, setFormState] = useState(initialForm)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/rollercoasters', formState)

        setFormState(initialForm)
        navigate(`/rollercoasters`)
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    return (
    <div>
    <h1>Add New RollerCoaster</h1>
    <div className='form'>
    <form onSubmit={ handleSubmit } key={formState.id}>
      <ul>
        <li><input required type="text" value={formState.name} onChange={handleChange} id={'name'} placeholder={'name'}/></li>
        <li><input required type="text" value={formState.manufacturer} onChange={handleChange} id={'manufacturer'} placeholder={'manufacturer'}/></li>
        <li><input required type="text" value={formState.speed} onChange={handleChange} id={'speed'} placeholder={'speed'}/></li>
        <li><input required type="text" value={formState.height} onChange={handleChange} id={'height'} placeholder={'height'}/></li>
        <li><input required type="text-area" value={formState.length} onChange={handleChange} id={'length'} placeholder={'length'}/></li>
        <li><input required type="text-area" value={formState.inversions} onChange={handleChange} id={'inversions'} placeholder={'inversions'}/></li>
        <li><input required type="text-area" value={formState.duration} onChange={handleChange} id={'duration'} placeholder={'duration'}/></li>
        <li><input required type="text-area" value={formState.image} onChange={handleChange} id={'image'} placeholder={'image-url'}/></li>
        <li><input required type="text-area" value={formState.heightRequirement} onChange={handleChange} id={'heightRequirement'} placeholder={'heightRequirement'}/></li>
        <button type="submit">Submit</button>
        </ul>
    </form>
    </div>
    </div>
    )
}

export default RollercoasterForm