import React from 'react';
import { render, cleanup } from 'react-testing-library'
import Counter from './Counter'

describe('Counter', () => {
  it('renders on the page', () => {
    const wrapper = render(<Counter/>)
  })
})