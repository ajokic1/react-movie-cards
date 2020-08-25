import React, { useState, useEffect, useReducer } from 'react';
import useMovies from './MoviesHook';
import MovieList from './MovieList';
import MovieContext from './MovieContext';

function Movies() {
  const [movieStore, moviesDispatch] = useMovies();



  return (
    <MovieContext.Provider value={[movieStore, moviesDispatch]}>
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList/>
        </div>
      </div>
    </div>
    </MovieContext.Provider>
  );
}

export default Movies;
