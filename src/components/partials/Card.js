import React from 'react';

function Card({ children }) {
  return (
    <div className="movie-card">
      <div className="movie-card card">
        {children}
      </div>
    </div>
  );
}

export default Card;