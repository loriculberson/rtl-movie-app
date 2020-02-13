import React from "react";
import { render, cleanup, fireEvent, getByText } from "@testing-library/react";
import MovieForm from "./MovieForm";

//does the proper data get passed in when the function is called
afterEach(cleanup)

const onSubmit = () => console.log('movie test')

describe('Movie Form', () => {
  it('displays the new movie form', () => {
    const { queryByTestId, container } = render(<MovieForm/>)
    expect(queryByTestId('movie-form')).toBeTruthy()  //it exists
  })
// this happens in the child component
  it('allows user to submit a new movie name', () => {
    const { getByText } = render(<MovieForm submitForm={onSubmit}/>)

    const submitMovieButton = getByText('Submit')
    // fireEvent.click(submitMovieButton)
  })
})