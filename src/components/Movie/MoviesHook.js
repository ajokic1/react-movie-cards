import React, { useReducer, useEffect, useState } from 'react';
import MovieService from '../../services/MovieService';

export default function useMovies() {
  const [counter, setCounter] = useState(1000);
  function getMovie(payload) {
    let movie = payload;
    movie.id = counter + 1;
    setCounter(counter + 1);
    return movie;
  }

  const movieReducer = (state, action) => {
    switch (action.type) {
      case 'addList':
        return { movies: state.movies.concat(action.payload) };
      case 'add':
        return { movies: [...state.movies, getMovie(action.payload)] };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(movieReducer, { movies: [] });

  useEffect(() => {
    const action = {
      type: 'addList',
      payload: MovieService.getMovies(),
    };
    dispatch(action);
  }, []);

  return [state, dispatch];
}
