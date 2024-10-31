import React from 'react';
import "./Button.css";

function Button(props) {
  return (
    <button 
        className="btn" 
    style={{backgroundColor: props.buttonBackground,
        color: props.ButtonColor,
    }}
  >
        {props.text}
        </button>

   );
} 

export default Button;
