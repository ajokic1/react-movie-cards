import React, { useState } from 'react';

function ToggleComponent({ children }) {
  const [firstIsVisible, setFirstIsVisible] = useState(true);

  function toggle() {
    setFirstIsVisible(!firstIsVisible);
  }

  return (
    <div>
      { children(firstIsVisible, toggle) }
    </div>
    
  );
}

export default ToggleComponent;