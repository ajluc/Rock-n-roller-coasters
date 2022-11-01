

import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Details = () => {
  let { id } = useParams()

  const [coasterDetails, setCoasterDetails] = useState(null)
  const getCoasterDetails = async () => {
    const response = await axios.get(`http://localhost:3001/rollercoasters/${id}`)
    await setCoasterDetails(response.data.rollercoaster)
  }

  useEffect(() => {getCoasterDetails()}, [id] )


  return (
    <div className='details-container'>
      
    </div>
  )
}

export default Details
