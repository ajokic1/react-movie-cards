import React, { useState } from 'react';
import InputField from '../partials/InputField';
import Button from '../partials/Button';

function AddMovieForm({ onCancel, dispatch }) {
  const [imageUrl, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  function onAddMovie() {
    const movie = {
      imageUrl, title, subtitle, description
    };

    const action = {
      type: "add",
      payload: movie
    };

    dispatch(action);
  }

  return (
    <form className="p-4 ">
      <InputField name="Url" value={imageUrl} setter={setUrl}/>
      <InputField name="Title" value={title} setter={setTitle}/>
      <InputField name="Subtitle" value={subtitle} setter={setSubtitle}/>
      <InputField name="Description" value={description} setter={setDescription}/>
      <div className="text-center">
      <Button onClick={onAddMovie}>
        Add Movie
      </Button>
      <Button onClick={onCancel}>
        Cancel
      </Button>
      </div>
      
    </form>

    
  );
}

export default AddMovieForm;