import React, { useEffect, useState } from 'react'
import CharactersList from '../../components/CharactersList/CharactersList'
import { fetchCharacters } from '../../services/characters'
import './Compendium.css'

export default function Compendium() {
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [eyeColor, setEyeColor] = useState([])
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

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

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <article className="compendium">
      <h1>SWAPI Compendium</h1>
      <CharactersList characters={characters} />
    </article>
  )
}
