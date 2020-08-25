import React from "react";

function Button({ onClick, style="primary", children, className }) {
  const clickHandler = event => {
    event.preventDefault();
    onClick();
  }

  const classNames = `mx-1 btn btn-${style}` + (className ? (" " + className) : '');

  return (
    <button type="button" className={classNames} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;