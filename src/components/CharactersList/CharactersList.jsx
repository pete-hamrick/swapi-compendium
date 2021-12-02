import React from 'react'
import Characters from '../Characters/Characters'

export default function CharactersList({ characters }) {
  // const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <ul>
      {characters.map((character) => (
        <Characters key={character} character={character} />
      ))}
    </ul>
  )
}
