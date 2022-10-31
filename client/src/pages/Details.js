// import { useEffect, useState } from 'react'
// import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details = () => {
  let { id } = useParams()
  return (
    <div>
      <h2>This is Details {id}</h2>
    </div>
  )
}

export default Details
