import React, { useEffect, useState } from 'react'
import CharactersList from '../../components/CharactersList/CharactersList'
import { fetchCharacters } from '../../services/characters'

export default function Compendium() {
  // add state hooks
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([])

  // add useEffect hooks
  useEffect(() => {
    async function getCharacters() {
      const characterList = await fetchCharacters()
      setCharacters(characterList)
      setLoading(false)
    }

    getCharacters()
  }, [])

  // any handlers?

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>SWAPI Compendium</h1>
      <CharactersList characters={characters} />
    </>
  )
}
