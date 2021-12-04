import React from 'react'
import './Characters.css'

export default function Characters({ character }) {
  return (
    <li className="character">
      <h5>{character.name}</h5>
      <p>Eye Color: {character.eye_color}</p>
      <p>Height: {character.height}cm</p>
      <p>Birth Year: {character.birth_year}</p>
    </li>
  )
}
