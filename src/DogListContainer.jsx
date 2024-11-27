// @ts-check
import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
export const DogListContainer = () => {
  const [breeds, setBreads] = useState({})
  const [selectedBreed, setSelectedBreed] = useState('')
  useEffect(() => {
    fetchDogBreads()
  }, [])

  const fetchDogBreads = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      setBreads(data.message)
    } catch (error) {
      console.error('Error fetching dog breeds:', error)
    }
  }

  console.log(breeds)
  return (
    <>
      <BreedsSelect breeds={breeds} setSelectedBreed={setSelectedBreed} />
    </>
  )
}

export default DogListContainer
