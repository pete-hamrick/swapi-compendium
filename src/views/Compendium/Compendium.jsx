import React, { useEffect, useState } from 'react'
import CharactersList from '../../components/CharactersList/CharactersList'
import { fetchCharacters } from '../../services/characters'

export default function Compendium() {
  // add state hooks
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [eyeColor, setEyeColor] = useState([])
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

  // add useEffect hooks
  useEffect(() => {
    async function getCharacters() {
      const characterList = await fetchCharacters()
      setCharacters(characterList.results)
      getEyeColor(characterList.results)
      setPrevPage(characterList.previous)
      setNextPage(characterList.next)
      setLoading(false)
    }

    function getEyeColor(characters) {
      const eyeColor = []
      characters.map((character) => {
        eyeColor.push(character.eye_color)
      })
      const uniqueEyeColor = new Set(eyeColor)
      setEyeColor([...uniqueEyeColor])
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
