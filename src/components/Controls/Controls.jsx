import React from 'react'

export default function Controls({ eyeColors, selectedEyeColor, filterChange }) {
  return (
    <div>
      <h4>Filter by Eye Color</h4>
      <select value={selectedEyeColor} onChange={(e) => filterChange(e.target.value)}>
        <option key="all" value="all">
          All
        </option>
        {eyeColors.map(({ color }) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  )
}
