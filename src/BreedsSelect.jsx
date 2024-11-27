// @ts-check
import { useEffect } from 'react'

export const BreedsSelect = (/** @type {{ breeds: { [key: string]: any[] }; setSelectedBreed: (arg0: string) => void; fetchDogImages: () => void; dogImageUrl: string[] }} */ props) => {
  useEffect(() => {
    console.log('BreedsList:', props.breeds)
  }, [props.breeds])

  useEffect(() => {
    console.log('BreedsSelect:', props.dogImageUrl)
  }, [props.dogImageUrl])

  if (!props.breeds) {
    console.log('BreedsSelect: breeds is not defined')
    return <></>
  }
  if (!props.dogImageUrl) {
    console.log('BreedsSelect: dogImageUrl is not defined')
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
      <button onClick={props.fetchDogImages}>表示</button>
      <ul>
        {props.dogImageUrl.map((url, index) => (
          <li key={index}>
            <img src={url} alt='犬の画像' />
          </li>
        ))}
      </ul>
    </>
  )
}

export default BreedsSelect
