import React from 'react'
import Characters from '../Characters/Characters'
import './CharactersList.css'

export default function CharactersList({ characters }) {
  return (
    <ul className="character-container">
      {characters.map((character) => (
        <Characters key={character.name} character={character} />
      ))}
    </ul>
  )
}
