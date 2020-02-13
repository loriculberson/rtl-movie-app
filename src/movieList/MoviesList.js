/* eslint react/no-did-mount-set-state: 0 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from '../movie/Movie';
const movieAPIKey = process.env.REACT_APP_MOVIE_KEY;

function MoviesList (){
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${movieAPIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
        );
        const movies = await response.json();
        // https://developers.themoviedb.org/3/discover/movie-discover shows you the response is in the results array
        setMovies(movies.results)
      } catch (e) {
        console.log(e);
      }
    }
    fetchMovies()
  }, [])
  useEffect(() => console.log('where movies', movies))

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
