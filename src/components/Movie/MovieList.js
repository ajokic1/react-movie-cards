import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import Card from '../partials/Card';
import ToggleComponent from '../partials/ToggleComponent';
import AddMovieButton from './AddMovieButton';
import AddMovieForm from './AddMovieForm';
import MovieContext from './MovieContext';

const getMovies = (movies, movieDispatch) => (
  <div className="card-deck">
    {movies.map(movie => (
      <Card key={movie.id}>
        <MovieCard key={movie.id} movie={movie} onDelete={() => {movieDispatch({ type: "delete", payload: movie.id })}} />
      </Card>      
    ))}
    <Card>
      <ToggleComponent>
        {(firstIsVisible, toggle) => (
            firstIsVisible
            ? <AddMovieButton onClick={toggle}/>
            : <AddMovieForm onCancel={toggle} dispatch={movieDispatch}/>
          )
        }
      </ToggleComponent>
    </Card>
  </div>
);

const MovieList = () => {
  const [{ movies }, moviesDispatch] = useContext(MovieContext);
  
  return <div>{getMovies(movies, moviesDispatch)}</div>;
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
