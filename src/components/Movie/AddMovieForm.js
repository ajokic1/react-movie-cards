import React, { useState, useRef } from 'react';
import InputField from '../partials/InputField';
import Button from '../partials/Button';

function AddMovieForm({ onCancel, dispatch }) {
  const [imageUrl, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  const formRef = useRef(null);

  function onAddMovie() {
    if(formRef.current.reportValidity()) {
      const movie = {
        imageUrl, title, subtitle, description
      };
  
      const action = {
        type: "add",
        payload: movie
      };
  
      dispatch(action);
    }
    
  }

  return (
    <form ref={formRef} className="p-4">
      <InputField name="Url" value={imageUrl} setter={setUrl} required/>
      <InputField name="Title" value={title} setter={setTitle} required/>
      <InputField name="Subtitle" value={subtitle} setter={setSubtitle} required/>
      <InputField name="Description" value={description} setter={setDescription} required/>
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