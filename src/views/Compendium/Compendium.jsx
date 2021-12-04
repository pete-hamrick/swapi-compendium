import React, { useEffect, useState } from 'react'
import CharactersList from '../../components/CharactersList/CharactersList'
// import Controls from '../../components/Controls/Controls'
import { fetchCharacters, fetchNewPage } from '../../services/characters'
// import { filterCharactersByEyeColor, getEyeColors } from '../../utils/helperFunctions'
import './Compendium.css'

export default function Compendium() {
  const [loading, setLoading] = useState(true)
  const [characters, setCharacters] = useState([])
  // const [prevPage, setPrevPage] = useState(null)
  // const [nextPage, setNextPage] = useState(null)
  // const [navigation, setNavigation] = useState('')

  useEffect(() => {
    async function getCharacters() {
      const characterList = await fetchCharacters()
      setCharacters(characterList.results)
      // setPrevPage(characterList.previous)
      // setNextPage(characterList.next)
      setLoading(false)
    }

    getCharacters()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <main className="compendium">
      <h1>SWAPI Compendium</h1>
      {/* <Controls /> */}
      <CharactersList characters={characters} />
    </main>
  )
}
