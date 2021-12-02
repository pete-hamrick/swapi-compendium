import React from 'react'
import './Characters.css'

export default function Characters({ character }) {
  return <li className="character">{character.name}</li>
}
