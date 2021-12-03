import React, { useEffect, useState } from 'react'
import CharactersList from '../../components/CharactersList/CharactersList'
import Controls from '../../components/Controls/Controls'
import { fetchCharacters, fetchNewPage } from '../../services/characters'
import { filterCharactersByEyeColor } from '../../utils/helperFunctions'
import './Compendium.css'

export default function Compendium() {
  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState([])
  const [eyeColors, setEyeColors] = useState([])
  const [selectedEyeColor, setSelectedEyeColor] = useState('all')
  const [prevPage, setPrevPage] = useState(null)
  const [nextPage, setNextPage] = useState(null)

  useEffect(() => {
    async function getCharacters() {
      const characterList = await fetchCharacters()
      setCharacters(characterList.results)
      getEyeColors(characterList.results)
      setPrevPage(characterList.previous)
      setNextPage(characterList.next)
      setLoading(false)
    }

    function getEyeColors(listOfCharacters) {
      const eyeColors = []
      listOfCharacters.map((character) => {
        eyeColors.push(character.eye_color)
      })
      const uniqueEyeColor = new Set(eyeColors)
      setEyeColors([...uniqueEyeColor])
    }

    getCharacters()
  }, [])

  // useEffect(() => {
  //   async function getFilteredCharacters() {
  //     if (!selectedEyeColor) return
  //     setLoading(true)

  //     if (selectedEyeColor !== 'all') {
  //       const filteredCharacters = filterCharactersByEyeColor(characters, selectedEyeColor)
  //       setCharacters(filteredCharacters)
  //     } else {
  //       const charactersList = await fetchCharacters()
  //       setCharacters(charactersList)
  //     }
  //     setLoading(false)
  //   }

  //   getFilteredCharacters()
  // }, [])

  // want to handle clicking next or previous with a function
  // pass function down as props to each button
  // assign each button a value

  // if next button clicked
  // set loading to true
  // call fetchNewPage function passing in nextPageUrl
  // update relevant state(probably all of it, ha)
  // set loading to false

  // otherwise
  // set loading to true
  // call fetchNewPage function passing in prevPageUrl
  // update relevant state(probably all of it, ha)
  // set loading to false
  const handleClick = async (value) => {
    if (value === 'next') {
      setLoading(true)
      const newCharacterList = await fetchNewPage(nextPage)
      setCharacters(newCharacterList.results)
      // function to handle eyeColors??
      setPrevPage(newCharacterList.previous)
      setNextPage(newCharacterList.next)
      setLoading(false)
    } else {
      setLoading(true)
      const newCharacterList = await fetchNewPage(prevPage)
      setCharacters(newCharacterList.results)
      // eye color function?
      setPrevPage(newCharacterList.previous)
      setNextPage(newCharacterList.next)
      setLoading(false)
    }
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <main className="compendium">
      <h1>SWAPI Compendium</h1>
      <Controls
        characters={characters}
        selectedEyeColor={selectedEyeColor}
        filterChange={setSelectedEyeColor}
        handleClick={handleClick}
      />
      <CharactersList characters={characters} />
    </main>
  )
}
