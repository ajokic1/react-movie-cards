import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MovieContext from './Movie/MovieContext';
import { getRating } from '../services/utils';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const StarRating = ({ movie }) => {
  const rating = getRating(movie.ratings);
  const containerStyle = { width: `${cropWidth(rating)}px` };

  const [{ movies }, moviesDispatch] = useContext(MovieContext);

  function rate(rating) {
    const action = {
      type: "addRating",
      payload: {
        id: movie.id,
        rating: rating
      }
    };
    moviesDispatch(action);
  }

  let emptyStars = [];
  let filledStars = [];

  for(let i=1;i<=5;i++) {
    emptyStars.push(<i className="fa fa-star-o fa-lg" key={i} onClick={() => rate(i)} style={styles.star}></i>);
    filledStars.push(<i className="fa fa-star fa-lg" key={i} onClick={() => rate(i)} style={styles.star}></i>);
  }
  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            {emptyStars}
          </div>
          <div style={styles.starsInner}>
            {filledStars}
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
