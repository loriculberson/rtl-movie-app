/* eslint react/no-did-mount-set-state: 0 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from '../movie/Movie';

const movieAPIKey = process.env.REACT_APP_MOVIE_KEY;
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

function MovieDetail ({match}) {
  const [movie, setMovie] = useState({})

  useEffect(()=> {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${movieAPIKey}&language=en-US`);
        const movie = await res.json();
        setMovie(movie)
      } catch (e) {
        console.log(e);
      }
    }
    fetchMovie()
  })

  useEffect(() => console.log('where movie', movie))


    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={`${movie.id}`}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
// }

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
