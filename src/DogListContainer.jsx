// @ts-check
import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'
export const DogListContainer = () => {
  const [breeds, setBreads] = useState({})
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogImageUrl, setDogImageUrl] = useState([])

  useEffect(() => {
    fetchDogBreads()
  }, [])

  useEffect(() => {
    if (selectedBreed) {
      fetchDogImages()
    }
  }, [breeds])

  const fetchDogBreads = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await response.json()
      setBreads(data.message)
      setSelectedBreed(Object.keys(data.message)[0])
    } catch (error) {
      console.error('Error fetching dog breeds:', error)
    }
  }

  const fetchDogImages = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/3`)
      const data = await response.json()
      setDogImageUrl(data.message)
    } catch (error) {
      console.error('Error fetching dog images:', error)
    }
  }

  return (
    <>
      <BreedsSelect breeds={breeds} setSelectedBreed={setSelectedBreed} fetchDogImages={fetchDogImages} dogImageUrl={dogImageUrl}/>
    </>
  )
}

export default DogListContainer
