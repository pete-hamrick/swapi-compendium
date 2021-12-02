import React from 'react'

export default function Controls({ characters, eyeColors, selectedEyeColor, filterChange }) {
  return (
    <div>
      <h4>Filter by Eye Color</h4>
      <select value={selectedEyeColor} onChange={(e) => filterChange(e.target.value)}>
        <option key="all" value="all">
          All
        </option>
        {characters.map(({ name, eye_color }) => (
          <option key={name} value={eye_color}>
            {eye_color}
          </option>
        ))}
      </select>
    </div>
  )
}
