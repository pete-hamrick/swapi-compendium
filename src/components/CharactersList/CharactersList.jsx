import React from 'react'
import Characters from '../Characters/Characters'

export default function CharactersList() {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <ul>
      {values.map((value) => (
        <Characters key={value} value={value} />
      ))}
    </ul>
  )
}
