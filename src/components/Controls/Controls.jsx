import React from 'react'

export default function Controls({ characters, selectedEyeColor, filterChange }) {
  return (
    <div>
      <h4>Filter by Eye Color</h4>
      <select value={selectedEyeColor} onChange={(e) => filterChange(e.target.value)}>
        <option key="all" value="all">
          all
        </option>
        {characters.map((character) => (
          <option key={character.name} value={character.eye_color}>
            {character.eye_color}
          </option>
        ))}
      </select>
    </div>
  )
}
