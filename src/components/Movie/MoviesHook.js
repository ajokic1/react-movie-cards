import React, { useReducer, useEffect, useState } from 'react';
import MovieService from '../../services/MovieService';

export default function useMovies() {
  const [counter, setCounter] = useState(1000);
  function getMovie(payload) {
    let movie = payload;
    movie.id = counter + 1;
    movie.ratings = [];
    setCounter(counter + 1);
    return movie;
  }

  function deleteMovie(state, action){
    const movies = state.movies.filter(movie => movie.id != action.payload);
    return {movies: movies};
  }

  function addRating(state,action) {
    let movies = state.movies;
    for(const movie in movies){
      if(movie.id === action.payload.id) {
        movie.ratings.push(action.payload.rating);
      }
    }
    return movies;
  }

  const movieReducer = (state, action) => {
    switch (action.type) {
      case 'addList':
        return { movies: state.movies.concat(action.payload) };
      case 'add':
        return { movies: [...state.movies, getMovie(action.payload)] };
      case 'delete':
        return deleteMovie(state, action);
      case 'addRating':
        return {movies: addRating(state,action)};
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
