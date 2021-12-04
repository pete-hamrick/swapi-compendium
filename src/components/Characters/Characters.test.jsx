import React from 'react'
import { render } from '@testing-library/react'
import Characters from './Characters'

it('should display the Character component', () => {
  const character = { name: 'Babu Frik', eye_color: 'yellow', height: '22', birth_year: '50BBY' }
  const { container } = render(<Characters character={character} />)

  expect(container).toMatchSnapshot()
})
