import React from 'react'

export default function Controls({ setNavigation }) {
  return (
    <section>
      <div className="next-prev-buttons">
        <button value="prev" onClick={(e) => setNavigation(e.target.value)}>
          Previous Page
        </button>
        <button value="next" onClick={(e) => setNavigation(e.target.value)}>
          Next Page
        </button>
      </div>
    </section>
  )
}
