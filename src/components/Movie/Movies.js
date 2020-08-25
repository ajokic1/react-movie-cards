import React, { useState, useEffect, useReducer } from 'react';
import useMovies from './MoviesHook';
import MovieList from './MovieList';

function Movies() {
  const [{ movies }, moviesDispatch] = useMovies();

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} moviesDispatch={moviesDispatch} />
        </div>
      </div>
    </div>
  );
}

export default Movies;
