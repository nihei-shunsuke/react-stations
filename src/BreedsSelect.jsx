// @ts-check
import { useEffect, useState } from 'react'

export const BreedsSelect = (/** @type {{ breeds: { [key: string]: any[] }; setSelectedBreed: (arg0: string) => void; }} */ props) => {
  useEffect(() => {
    console.log('BreedsSelect:', props.breeds)
  }, [props.breeds])

  if (!props.breeds) {
    return <></>
  }

  const breedKeys = Object.keys(props.breeds);

  return (
    <>
      <select onChange={(e) => props.setSelectedBreed(e.target.value)}>
        {breedKeys.map((breed) => (
          <option key={breed} value={breed}>{breed}</option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
