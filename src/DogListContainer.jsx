// @ts-check
import { useEffect, useState } from 'react'
export const DogListContainer = () => {
  const fetchDogBreads = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      setBreads(data.message)
    } catch (error) {
      console.error('Error fetching dog breeds:', error)
    }
  }
  const [breads, setBreads] = useState([])
  useEffect(() => {
    fetchDogBreads()
  }, [])
  return <></>
}

export default DogListContainer
