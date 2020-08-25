import React from 'react';

function AddMovieButton({ onClick }) {
  return (
    <div onClick={onClick} style={{cursor: "pointer", paddingTop: "7rem", paddingBottom: "7rem", textAlign: "center"}} >
      <div style={{fontSize: "8rem"}}>+</div>
      <div>Add movie</div>
    </div>
    
  );
}

export default AddMovieButton;