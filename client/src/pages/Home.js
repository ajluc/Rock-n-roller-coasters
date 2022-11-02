import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [coasters, setCoasters] = useState([])
  const getCoasters = async () => {
    const response = await axios.get(`/rollercoasters`)
    setCoasters(response.data)
  }

  useEffect(() => {
    getCoasters()
  }, [])
  let navigate = useNavigate()

  const viewCoaster = (id) => {
    navigate(`/rollercoasters/${id}`)
  }

  return (
    <div className="coaster-container">
      <section className="grid">
        {coasters?.map((coaster) => (
          <Card
            key={coaster._id}
            id={coaster._id}
            name={coaster.name}
            maxHeight={coaster.maxHeight}
            topSpeed={coaster.topSpeed}
            heightReq={coaster.heightReq}
            duration={coaster.duration}
            img={coaster.img}
            onClick={viewCoaster}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
