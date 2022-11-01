import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Details = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [coasterDetails, setCoasterDetails] = useState(null)
  const getCoasterDetails = async () => {
    const response = await axios.get(
      `http://localhost:3001/rollercoasters/${id}`
    )
    await setCoasterDetails(response.data.rollercoaster)
  }

  useEffect(() => {
    getCoasterDetails()
  }, [id])

  const deleteCoaster = async () => {
    try {
      await axios.delete(`http://localhost:3001/rollercoasters/${id}`)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="details-container">
      <section className="coaster-image-container">
        <div>
          <img src={coasterDetails?.img} alt={coasterDetails?.name} />
        </div>
      </section>
      <section className="details">
        <div className="flex-row space"></div>
        <div>
          <h1>Name: {coasterDetails?.name}</h1>
          <p>Max Height: {coasterDetails?.maxHeight}ft</p>
          <p>Top Speed: {coasterDetails?.topSpeed}mph</p>
          <p>Height Requirement: {coasterDetails?.heightReq} inches</p>
          <p>Duration: {coasterDetails?.duration} seconds</p>
        </div>
        <button onClick={deleteCoaster}>Delete</button>
      </section>
    </div>
  )
}

export default Details
