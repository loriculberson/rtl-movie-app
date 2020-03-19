/* eslint react/no-did-mount-set-state: 0 */
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// https://developers.themoviedb.org/3/discover/movie-discover shows you the response is in the results array
import MoviesList from './movieList/MoviesList';
import MovieDetail from './movieDetail/MovieDetail';
const movieAPIKey = process.env.REACT_APP_MOVIE_KEY;

function App () {
  const [movies, setMovies] = useState([])

  useEffect(()=> {
    console.log('useEffect movies')
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${movieAPIKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
        );
        const movies = await response.json();
        setMovies(movies.results)
      } catch (e) {
        console.log(e);
      }
    }
    fetchMovies()
  }, [])
  useEffect(() => console.log('where movies', movies))

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route exact path="/" render={(props) => <MoviesList {...props} movies={movies}/>} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;
