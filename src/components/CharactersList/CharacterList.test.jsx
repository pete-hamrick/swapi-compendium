import React from 'react'
import { render } from '@testing-library/react'
import CharactersList from './CharactersList'

it('should display the character list', () => {
  const { container } = render(
    <CharactersList characters={['Dorothy', 'Rose', 'Blanche', 'Estelle']} />
  )

  expect(container).toMatchSnapshot()
})
