import React, { useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';
import Button from '../partials/Button';
import { getRating } from '../../services/utils';

const MovieCard = ({ movie, onDelete }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  function showTooltip() {
    setTooltipVisible(true);
  }

  function hideTooltip() {
    setTooltipVisible(false);
  }
  
  return (
    <div>
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">
          {movie.title}
          {movie.id >= 1000 && (
            <Button onClick={onDelete} style="danger">
              Delete
            </Button>
          )}
        </h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movie.description}
        </p>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating movie={movie} />
          </div>
          <div 
            className="card-footer-badge float-right badge badge-primary badge-pill" 
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}>
            {getRating(movie.ratings)}
            {tooltipVisible && <div style={{ zIndex: '999' }} className="text-dark p-2 position-absolute bg-light border">Ratings: {movie.ratings.length}</div>}
          </div>
          
        </div>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
