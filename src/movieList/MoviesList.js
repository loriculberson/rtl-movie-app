/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import styled from 'styled-components';
import Movie from '../movie/Movie';

function MoviesList ({movies}){
  const list = movies 
    ? movies.map(movie => <Movie key={movie.id} movie={movie} />)
    : <h2>No movies found</h2>
    return (
      <MovieGrid>
        {list}
      </MovieGrid>
    );
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
