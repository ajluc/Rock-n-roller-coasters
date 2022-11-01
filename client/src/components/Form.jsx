import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
const initialState = {name:'', maxHeight: "", topSpeed: "", heightReq: "", duration: "", img:''}

const [formState, setFormState] = useState(initialState)

let navigate = useNavigate()

const handleSubmit = async (evt) => {
    evt.preventDefault()
    await axios.post(`http://localhost:3001/rollercoasters`, formState)
    setFormState(initialState)
    navigate(`/`)
}

const handleChange = (evt) => {
    setFormState({...formState, [evt.target.id]: evt.target.value})
}

    return (
        <div className='big-container'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' id='name' onChange={handleChange} value={formState.name}/>
            <input type='number' placeholder='Max Height' id='maxHeight' onChange={handleChange} value={formState.maxHeight}/>
            <input type='number' placeholder='Top Speed' id='topSpeed' onChange={handleChange} value={formState.topSpeed}/>
            <input type='number' placeholder='Height Required' id='heightReq' onChange={handleChange} value={formState.heightReq}/>
            <input type='number' placeholder='Duration' id='duration' onChange={handleChange} value={formState.duration}/>
            <input type='text' placeholder='Image URL' id='img' onChange={handleChange} value={formState.img}/>
            <button type='submit'>Add New Ride</button>
        </form>

        </div>

    )
}

export default Form