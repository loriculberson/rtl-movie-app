import React from "react";
import { render, cleanup, fireEvent, getByText } from "@testing-library/react";
import NewMovie from "./NewMovie";

//integration testing
afterEach(cleanup)

describe('New Movie', () => {
  it('displays New Movie h1', () => {
    const { getByText, getByTestId, container } = render(<NewMovie/>)
    getByText('Add New Movie!')
    expect(getByTestId('page-title').textContent).toBe('Add New Movie!')
    // expect(container.firstChild).toMatchSnapshot()
  })

// this happens in the child component
  it('allows user to submit a new movie name', () => {
    const { getByTestId } = render(<NewMovie />)

    const newMovieForm = getByTestId('movie-form')
    fireEvent.click(newMovieForm)

  })
})